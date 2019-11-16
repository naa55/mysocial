import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn btn-light">
        <i
          className="fas fa-user-circle text-primary"
          style={{ color: "rgb(125, 243, 125)" }}></i>{" "}
        Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-light">
        <i
          className="fab fa-black-tie text-primary"
          style={{ color: "rgb(125, 243, 125)" }}></i>{" "}
        Add Experience
      </Link>
    </div>
  );
};

export default DashboardActions;
