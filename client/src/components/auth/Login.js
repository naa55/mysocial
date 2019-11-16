// import React, { Fragment, useState } from "react";
// import { Link, Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { login } from "../../actions/auth";

// const Login = ({ login, isAuthenticated }) => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     password2: ""
//   });

//   const { email, password } = formData;

//   const onChange = e =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async e => {
//     e.preventDefault();
//     login(email, password);
//   };
//   //redirect if logged In

//   if (isAuthenticated) {
//     return <Redirect to="/dashboard" />;
//   }

//   return (
//     <Fragment>
//       {" "}
//       <h1 className="large text-primary">Sign In</h1>
//       <p className="lead">
//         <i className="fas fa-user"></i> Sign Into Your Account
//       </p>
//       <form className="form" onSubmit={e => onSubmit(e)}>
//         <div className="form-group">
//           <input
//             type="email"
//             placeholder="Email Address"
//             name="email"
//             value={email}
//             onChange={e => onChange(e)}
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={password}
//             onChange={e => onChange(e)}
//           />
//         </div>

//         <input type="submit" className="btn btn-primary" value="Login" />
//       </form>
//       <p class="my-1">
//         Don't have an account? <Link to="/register">Register</Link>
//       </p>
//     </Fragment>
//   );
// };

// Login.propTypes = {
//   login: PropTypes.func.isRequired,
//   isAuthenticate: PropTypes.bool
// };

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(
//   mapStateToProps,
//   { login }
// )(Login);

import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };
  //redirect if logged In

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <form action="" className="signs" onSubmit={e => onSubmit(e)}>
        <h3>Login Sign</h3>

        <input
          className="sign"
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={e => onChange(e)}
        />

        <br />

        <input
          className="sign"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
          // minLength="6"
        />
        <br />

        {/* <button class="btn2">Sign Up</button> */}
        <input type="submit" className="btn2" value="Login" />
        <p class="my-1">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticate: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
