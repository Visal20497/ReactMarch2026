# Task Quest - Productivity & Motivation App

A modern React task management application with Redux state management, motivational quotes, and theme support. Built with TypeScript and Vite, featuring advanced state management patterns and error boundary handling.

## Features

- ✅ **Task Management** - Create, manage, and track your todos with ease
- 🎯 **Motivational Quotes** - Get inspired with an integrated quotes feature
- 🎨 **Dark/Light Theme** - Seamless theme switching with persistent preferences
- ⚡ **Advanced State Management** - Redux and useReducer patterns for robust state handling
- 🛡️ **Error Handling** - Comprehensive error boundaries for reliable UX
- 📱 **Responsive Design** - Works great on all devices
- ⚙️ **TypeScript** - Full type safety for better development experience
- 🚀 **Vite** - Lightning-fast build and development experience

## Tech Stack

- **React** 18+ with TypeScript
- **Redux** - State management
- **Vite** - Build tool and dev server
- **CSS** - Component-scoped styling
- **ESLint** - Code quality

## Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── ErrorAlert.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── Loading.tsx
│   │   └── Page.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Layout.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── useThemeMode.ts
│   ├── FetchWithUseReducer.tsx
│   ├── MotivationalQuotes.tsx
│   ├── Todo.tsx
│   └── TodowithUserReducer.tsx
├── Redux/
│   ├── RootReducer.ts
│   └── Store.ts
├── theme/
│   └── theme.ts
├── App.tsx
└── main.tsx
```

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/task-quest.git
cd task-quest
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Usage

### Creating Tasks
Use the Todo component to add, edit, and delete tasks. Tasks are managed through Redux for global state consistency.

### Switching Themes
Toggle between dark and light themes using the ThemeProvider. Your preference is automatically saved.

### View Motivational Quotes
Browse through motivational quotes in the MotivationalQuotes component to stay inspired.

## Key Components

- **ErrorBoundary** - Catches and displays errors gracefully
- **ThemeProvider** - Manages application-wide theme switching
- **Layout** - Main layout wrapper with header and sidebar
- **Loading** - Reusable loading indicator component

## License

MIT

## Contributing

Contributions are welcome! Feel free to open issues and submit pull requests.
