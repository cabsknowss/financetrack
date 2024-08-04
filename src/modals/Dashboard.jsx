import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-income"></div>
      <div className="dashboard-expense"></div>
      <div className="dashboard-analytics"></div>
      <div className="dashboard-datatable"></div>
      <div className="dashboard-reflect"></div>
    </div>
  );
};

export default Dashboard;
