# -------- Step 1: Build --------
FROM node:20-alpine AS build

WORKDIR /app

# Copy dependencies
COPY package.json package-lock.json ./

RUN npm install

# Copy project files
COPY . .

# Build the Vite app
RUN npm run build


# -------- Step 2: Serve --------
FROM nginx:alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy build output
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]