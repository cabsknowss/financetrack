import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import "./App.css";

const App = () => {
  const [activeModal, setActiveModal] = useState("Dashboard");

  return (
    <div className="app bg-accent-400">
      <Sidebar setActiveModal={setActiveModal} />
      <Content activeModal={activeModal} />
    </div>
  );
};

export default App;
