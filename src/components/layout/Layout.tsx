import React, { useState } from "react";
import { Box, Container, Toolbar } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Todo from "../Todo";
import TodoWithReducer from "../TodowithUserReducer";
import FetchWithUseReducer from "../FetchWithUseReducer";
import MotivationalQuotes from "../MotivationalQuotes";
import { ErrorBoundary } from "../ui";
import TodoWithRedux from "../../Redux/components/Todo";
import FetchWithRedux from "../../Redux/components/FetchWithRedux";
import TodoWithReduxToolkit from "../../ReduxToolkit/components/TodoWithReduxToolkit";
import FetchDataWithReduxToolKit from "../../ReduxToolkit/components/FetchWithReduxToolkit";
import ConnectedTodoWithReactClassComponents from "../classcomponent/ReactClassComponents";
import ApiWithClassComponents from "../classcomponent/FetchApiClassComponents";
import { TodoWithClassComponents } from "../classcomponent/TodoClassComponents";
import ReactFromWithZodlib from "../ReactFromWithZodlib";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState<
    | "home"
    | "fetch"
    | "todo"
    | "todoReducer"
    | "todowithRedux"
    | "FetchWithRedux"
    | "TodoWithReduxToolkit"
    | "FetchDataWithReduxToolKit"
    | "TodoWithReactClassComponents"
    | "ApiWithClassComponents"
    | "TodoWithClassComponents"
    | "ReactFromWithZodlib"
  >("home");

  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavigate = (
    view:
      | "home"
      | "fetch"
      | "todo"
      | "todoReducer"
      | "todowithRedux"
      | "FetchWithRedux"
      | "TodoWithReduxToolkit"
      | "FetchDataWithReduxToolKit"
      | "TodoWithReactClassComponents"
      | "ApiWithClassComponents"
      | "TodoWithClassComponents"
      | "ReactFromWithZodlib"
  ) => {
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
      case "todowithRedux":
        return <TodoWithRedux />;

      case "FetchWithRedux":
        return <FetchWithRedux />;
      case "TodoWithReduxToolkit":
        return <TodoWithReduxToolkit />;
      case "FetchDataWithReduxToolKit":
        return <FetchDataWithReduxToolKit />;
      case "TodoWithReactClassComponents":
        return <ConnectedTodoWithReactClassComponents />;
      case "ApiWithClassComponents":
        return <ApiWithClassComponents />;
      case "TodoWithClassComponents":
        return <TodoWithClassComponents />;
      case "ReactFromWithZodlib":
        return <ReactFromWithZodlib />;
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
        <Container disableGutters sx={{ width: "100%" }}>
          <ErrorBoundary>{children || renderCurrentView()}</ErrorBoundary>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
