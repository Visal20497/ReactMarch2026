import React from "react";
import { Box, Typography, Paper } from "@mui/material";

interface PageProps {
  title: string;
  children: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  fullWidth?: boolean;
}

const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        border: "none",
        py: { xs: 3, sm: 4, md: 5 },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, sm: 4, md: 5 },
          borderRadius: 0,
          bgcolor: "transparent",
          border: "none",
          boxShadow: "none",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ textAlign: "center", mb: 3, color: "text.primary" }}
        >
          {title}
        </Typography>
        <Box sx={{ mt: 2 }}>{children}</Box>
      </Paper>
    </Box>
  );
};

export default Page;
