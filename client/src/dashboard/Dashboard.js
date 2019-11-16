import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../components/layout/Spinner";
// import { getCurrentProfile } from "../actions/profile";
import { getCurrentProfile, deleteAccount } from "../actions/profile";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="b-text">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome {user && user.name}
        <br />
        {profile !== null ? (
          <Fragment>
            <DashboardActions />
            <Experience experience={profile.experience} />

            <div className="my-2">
              <button
                className="btn btn-danger"
                onClick={() => deleteAccount()}>
                Delete My Account
              </button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            {/* <p style={{ fontSize: "16px" }}>Add a Profile</p>
            <Link to="/create-profile" className="btn btn-primary my-1">
              Create Profile
            </Link> */}
            <p style={{ fontSize: "16px" }}>Move Straight to post</p>

            <Link to="/posts" className="btn btn-primary my-1">
              Add Post
            </Link>

            {/* ask whether normal  users should also be able to delete thier account  */}

            {/* <button className="btn btn-danger" onClick={() => deleteAccount()}>
              Delete My Account
            </button> */}
          </Fragment>
        )}
      </p>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
