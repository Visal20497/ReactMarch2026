import React from "react";
import Layout from "./components/layout/Layout";
import ThemeProvider from "./components/layout/ThemeProvider";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import ReduxToolkitStore from "./ReduxToolkit/Store";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Provider store={ReduxToolkitStore}>
          <Layout />
        </Provider>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
