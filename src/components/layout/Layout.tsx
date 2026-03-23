import React, { useState } from "react";
import { Box, Container, Toolbar } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Todo from "../Todo";
import TodoWithReducer from "../TodowithUserReducer";
import FetchWithUseReducer from "../FetchWithUseReducer";
import MotivationalQuotes from "../MotivationalQuotes";
import { ErrorBoundary } from "../ui";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState<
    "home" | "fetch" | "todo" | "todoReducer"
  >("home");

  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavigate = (view: "home" | "fetch" | "todo" | "todoReducer") => {
    setCurrentView(view);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case "home":
        return <MotivationalQuotes />;
      case "todo":
        return <Todo />;
      case "fetch":
        return <FetchWithUseReducer />;
      case "todoReducer":
        return <TodoWithReducer />;
      default:
        return <MotivationalQuotes />;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Header onMenuClick={handleDrawerToggle} title="My Project" />
      <Sidebar
        open={sidebarOpen}
        onClose={handleDrawerToggle}
        onNavigate={handleNavigate}
        currentView={currentView}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 0, width: "100%" }}>
        <Toolbar />
        <Container maxWidth={false} disableGutters sx={{ width: "100%" }}>
          <ErrorBoundary>{children || renderCurrentView()}</ErrorBoundary>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
