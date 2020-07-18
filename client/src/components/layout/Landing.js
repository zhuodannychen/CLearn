import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css"
import Navbar from "./Navbar";

class Landing extends Component {
    render() {
        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut">
            <Navbar />
            <div style={{ height: "75vh" }} className="container-fluid">
                <div className="col-12 text-center">
                    <h4 style={{margin: "5vh"}}>
                        Learn the most frequent <b>5000</b> Chinese Characters
                    </h4>
                    <br />
                </div>

                <div className="text-center">
                    <Link
                        to="/login"
                        style={{
                        width: "140px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px"
                        }}
                        className="btn btn-light"
                    >
                        Log In
                    </Link>
                </div>

                <br />

                <div className="text-center">
                    <Link
                        to="/register"
                        style={{
                        width: "140px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px"
                        }}
                        className="btn btn-dark"
                    >
                        Register
                    </Link>
                </div>

                <br />

                <div className="text-center">
                    <Link 
                        to="/test"
                        style={{
                        width: "140px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px"
                        }}
                        className="btn btn-secondary"
                    >
                        Quick Test
                    </Link>
                </div>

                <br />

                <div className="text-center">
                    <Link
                        to="/about"
                        style={{
                        width: "140px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px"
                        }}
                        className="btn btn-info"
                    >
                        About
                    </Link>
                </div>
            </div>
            </Animated>
        );
    }
}

export default Landing;
