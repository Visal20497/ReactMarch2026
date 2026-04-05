import React from "react";
import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Home as HomeIcon,
  ListAlt as TodoIcon,
  GetApp as FetchIcon,
} from "@mui/icons-material";

const drawerWidth = 240;

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  onNavigate: (
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
      | "ReactFromWithZodlib",
  ) => void;
  currentView:
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
    | "ReactFromWithZodlib";
}

const Sidebar: React.FC<SidebarProps> = ({
  open,
  onClose,
  onNavigate,
  currentView,
}) => {
  const menuItems = [
    {
      text: "Home",
      icon: <HomeIcon />,
      view: "home" as const,
    },
    {
      text: "Fetch Data",
      icon: <FetchIcon />,
      view: "fetch" as const,
    },
    {
      text: "Todo (useState)",
      icon: <TodoIcon />,
      view: "todo" as const,
    },
    {
      text: "Todo (useReducer)",
      icon: <TodoIcon />,
      view: "todoReducer" as const,
    },
    {
      text: "Todo (Redux)",
      icon: <TodoIcon />,
      view: "todowithRedux" as const,
    },
    {
      text: "Fetch (Redux)",
      icon: <FetchIcon />,
      view: "FetchWithRedux" as const,
    },
    {
      text: "Todo (Redux Toolkit)",
      icon: <TodoIcon />,
      view: "TodoWithReduxToolkit" as const,
    },
    {
      text: "Fetch Data (Redux Toolkit)",
      icon: <FetchIcon />,
      view: "FetchDataWithReduxToolKit" as const,
    },
    {
      text: "Todo (Class Component with Redux)",
      icon: <TodoIcon />,
      view: "TodoWithReactClassComponents" as const,
    },
    {
      text: "API (Class Component)",
      icon: <FetchIcon />,
      view: "ApiWithClassComponents" as const,
    },
    {
      text: "Todo (Class Component)",
      icon: <TodoIcon />,
      view: "TodoWithClassComponents" as const,
    },
    {
      text: "Profile Form (Zod)",
      icon: <HomeIcon />,
      view: "ReactFromWithZodlib" as const,
    },
  ];

  const handleMenuClick = (
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
      | "ReactFromWithZodlib",
  ) => {
    onNavigate(view);
    onClose();
  };

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              selected={currentView === item.view}
              onClick={() => handleMenuClick(item.view)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
