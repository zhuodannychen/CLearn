import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className="text-center">
                <Link
                    to="/"
                    style={{
                        fontFamily: "monospace",
                        fontSize: "50px"
                    }}
                >
                    CLearn 
                </Link>
            </div>
        );
    }
}

export default Navbar;
