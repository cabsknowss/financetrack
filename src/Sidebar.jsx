import React from "react";
import logo from "./assets/img/logo.svg";
import CottageIcon from "@mui/icons-material/Cottage";
import InputIcon from "@mui/icons-material/Input";
import BarChartIcon from "@mui/icons-material/BarChart";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Sidebar = () => {
  const iconStyle = {
    width: "15px",
    height: "15px",
    // color: "hsl(174, 59%, 56%)",
    color: "white",
  };

  const navs = [
    { text: "Dashboard", icon: <CottageIcon style={iconStyle} /> },
    { text: "Inputs", icon: <InputIcon style={iconStyle} /> },
    { text: "Charts", icon: <BarChartIcon style={iconStyle} /> },
  ];
  const personals = [
    { text: "Profile", icon: <PersonIcon style={iconStyle} /> },
    { text: "Settings", icon: <SettingsIcon style={iconStyle} /> },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-nameplate">
        <img src={logo} alt="logo" className="sidebar-nameplate__logo" />
        <h2 className="fs-400 fw-bold text-neutral-700 ff-mono">
          FINANCETRACK
        </h2>
      </div>
      <div>
        <nav>
          <ul className="sidebar-nav-lists">
            {navs.map((nav, index) => (
              <li key={index} className="sidebar-nav-list">
                <div className="sidebar-nav-icon">{nav.icon}</div>
                <div className="sidebar-nav-text fs-300 fw-bold">
                  {nav.text}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <h2 className="fs-400 text-neutral-700 fw-bold">Personal</h2>
        <nav>
          <ul className="sidebar-nav-lists">
            {personals.map((personal, index) => (
              <li key={index} className="sidebar-nav-list">
                <div className="sidebar-nav-icon">{personal.icon}</div>
                <div className="sidebar-nav-text fs-300 fw-bold">
                  {personal.text}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <div>
          <div>
            <HelpOutlineIcon />
          </div>
        </div>
        <div>
          <h3>Need help?</h3>
          <p>Please check the docs</p>
        </div>
        <div>
          <button>DOCUMENTATION</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
