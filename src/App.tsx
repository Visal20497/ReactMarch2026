import React from "react";
import Layout from "./components/layout/Layout";
import ThemeProvider from "./components/layout/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
