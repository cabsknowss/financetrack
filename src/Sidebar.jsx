import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SettingsIcon from "@mui/icons-material/Settings";
import logo from "./assets/logo.svg";

const Sidebar = (props) => {
  const { setActiveModal } = props;

  const navLists = [
    { icon: <DashboardIcon />, text: "Dashboard" },
    { icon: <ReceiptLongIcon />, text: "Transaction" },
    { icon: <EqualizerIcon />, text: "Tracker" },
  ];

  return (
    <div className="sidebar bg-secondary-400">
      <header className="sidebar-header">
        <a href="#">
          <h3 className="ff-mono fs-subheading text-neutral-400">
            FinanceTrack
          </h3>
        </a>

        <nav className="sidebar-nav">
          <ul className="sidebar-lists">
            {navLists.map((list, index) => (
              <li
                key={index}
                className="sidebar-list fs-400"
                onClick={() => setActiveModal(list.text)}
              >
                {list.icon}
                {list.text}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="sidebar-setting">
        <SettingsIcon />
      </div>
    </div>
  );
};

export default Sidebar;
