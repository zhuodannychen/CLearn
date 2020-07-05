import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { Animated } from "react-animated-css"
import Navbar from "../layout/Navbar";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

componentWillReceiveProps(nextProps) {
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
const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history); 
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
                <b>Register</b> below
              </h2>
              <h5>
                Already have an account? <Link to="/login">Log in</Link>
              </h5>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="inp-field">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  placeholder="Name"
                  style={{padding: "10px", borderRadius: "10px"}}
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                <p style={{color: "red"}}>{errors.name}</p>
              </div>
              <div className="inp-field">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Email"
                  style={{padding: "10px", borderRadius: "10px"}} 
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <p style={{color: "red"}}>{errors.email}</p>
              </div>
              <div className="inp-field">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Password"
                  style={{padding: "10px", borderRadius: "10px"}}
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <p style={{color: "red"}}>{errors.password}</p>
              </div>
              <div className="inp-field">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  placeholder="Confirm Password"
                  style={{padding: "10px", borderRadius: "10px"}}
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <p style={{color: "red"}}>{errors.password2}</p>
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
                  Sign up
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

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
) (withRouter(Register));
