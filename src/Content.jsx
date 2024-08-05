import React from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Dashboard from "./modals/Dashboard";
import Transaction from "./modals/Transaction";
import Tracker from "./modals/Tracker";

const Content = (props) => {
  const { activeModal } = props;

  const modals = {
    Dashboard: <Dashboard />,
    Transaction: <Transaction />,
    Tracker: <Tracker />,
  };

  return (
    <div className="content bg-primary-400">
      <header className="content-header">
        <div className="content-header__title fs-subheading">
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
