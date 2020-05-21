import React from "react";

// Third Party Components
import { BrowserRouter } from "react-router-dom";

// Custom components
import Layout from "./containers/Layout/Layout";
import Header from "./components/Header/Header";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
