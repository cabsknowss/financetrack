import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Content from "./Content";

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
