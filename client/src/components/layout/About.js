import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css"
import Navbar from "./Navbar";

class About extends Component {
    render() {
        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut">
            <Navbar />
            <div style={{ margin: "50px", marginTop: "4rem", background: "#edf4ff", padding: "15px", borderRadius: "20px"}}>
                <Link to="/" style={{margin: "10px"}}>
                    <i className="fa fa-arrow-left"></i> Back to home
                </Link>

                <div className="text-center">
                    <br />
                    <h3>Welcome to CLearn!</h3>
                </div>
                <p style={{margin: "30px"}}>
                    Do you want to learn Chinese characters? <Link to="/login">Login</Link> to get started!
                    <br />
                    <br />
                    CLearn contains 5000 Chinese characters that are ordered by their use of frequency. <a target="_blank" rel="noopener noreferrer" href="https://lingua.mtsu.edu/chinese-computing/statistics/char/list.php?Which=MO">Frequency Data Source</a>
                    <br />
                    <br />
                    While there are over 80000 Chinese characters, you only need 
                    to know 1000 Chinese characters to understand approximately 90% of text/communication. With 2500, you will approximately
                    understand 98%, and with 4000+, you will understand 99%.
                    <br />
                    <br />
                    Therefore, it is important to find your goal when learning Chinese. If you just want to improve your daily communication skills,
                    then knowing 1000 characters is enough. If you want to do well on the HSK 1 to 6 test, you need to know 2600
                    chinese characters. If you want to read Chinese novels and be able to recognize most of the characters, then you need to know approximately
                    4000+ chinese characters.
                    <br />
                    <br />
                    Memorizing all of these Chinese characters can seem daunting, so CLearn is here to help you to achieve your goal!
                    <br />
                    <br />
                    If you have any questions or feedback, please email <a href="mailto:zhuodannychen@gmail.com">zhuodannychen@gmail.com</a>
                </p>
            </div>
            </Animated>
        )
    }
}

export default About;
