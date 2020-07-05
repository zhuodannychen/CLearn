import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { Animated } from "react-animated-css"
import Navbar from "../layout/Navbar";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
}

onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

render() {
    const { errors } = this.state;
return (
    <Animated animationIn="fadeIn" animationOut="fadeOut">
      <Navbar />
      <div className="container">
        <div style={{ marginTop: "4rem" }}>
          <div className="text-center" style={{padding: "50px", background: "#edf4ff", borderRadius: "20px"}}>
            <Link to="/">
              <i className="fa fa-arrow-left"></i> Back to home
            </Link>
            <div className="login-text" style={{ padding: "20px", margin: "10px" }}>
              <h2>
                <b>Login</b> below
              </h2>
              <h5>Don't have an account? <Link to="/register">Register</Link></h5>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="inp-field">
                <i className="fa fa-user"></i>
                <span> </span>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  placeholder="Email"
                  id="email"
                  type="email"
                  style={{padding: "10px", borderRadius: "10px"}}
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <p style={{color: "red"}}>
                  {errors.email}
                  {errors.emailnotfound}
                </p>
              </div>
              <div className="inp-field">
                <i className="fa fa-lock"></i>
                <span> </span>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  placeholder="Password"
                  id="password"
                  type="password"
                  style={{padding: "10px", borderRadius: "10px"}}
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <p style={{color: "red"}}>
                  {errors.password}
                  {errors.passwordincorrect}
                </p>
              </div>
              <div className="col-12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </Animated>
    );
  }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);

