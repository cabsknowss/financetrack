import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InputIcon from "@mui/icons-material/Input";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SettingsIcon from "@mui/icons-material/Settings";
import logo from "./assets/logo.svg";

const Sidebar = (props) => {
  const { setActiveModal } = props;

  const navLists = [
    { icon: <DashboardIcon />, text: "Dashboard" },
    { icon: <InputIcon />, text: "Inputs" },
    { icon: <EqualizerIcon />, text: "Tracker" },
  ];

  return (
    <div className="sidebar bg-primary-400">
      <div className="flex-center">
        <img src={logo} alt="logo" style={{ color: "#000", width: "15rem" }} />
      </div>
      <nav className="sidebar-nav">
        <ul className="sidebar-lists">
          {navLists.map((list, index) => (
            <li
              key={index}
              className="sidebar-list"
              onClick={() => setActiveModal(list.text)}
            >
              {list.icon}
              {list.text}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex-center">
        <SettingsIcon />
      </div>
    </div>
  );
};

export default Sidebar;
