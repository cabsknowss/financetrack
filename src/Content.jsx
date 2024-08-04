import React from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Dashboard from "./modals/Dashboard";
import Inputs from "./modals/Inputs";
import Tracker from "./modals/Tracker";

const Content = (props) => {
  const { activeModal } = props;

  const modals = {
    Dashboard: <Dashboard />,
    Inputs: <Inputs />,
    Tracker: <Tracker />,
  };

  return (
    <div className="content">
      <header className="content-header">
        <div className="content-header__title">
          <MenuOpenIcon />
          <h2>{activeModal}</h2>
        </div>
        <div className="content-header__title">
          <AccountCircleIcon />
          <p>Kenneth</p>
        </div>
      </header>

      <div className="content-main">{modals[activeModal] || null}</div>
    </div>
  );
};

export default Content;
