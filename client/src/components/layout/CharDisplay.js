
import React, { Component } from 'react';

class CharDisplay extends Component {
    render() {
        return (
            <div className="char-display container center" style={{marginTop: "10vh", 
                                                      padding: "20px", 
                                                      background: "white", 
                                                      borderRadius: "10px"}}>
                <h2>{this.props.hanzi}</h2>
                <h4 style={{overflowWrap: "break-word",
                            wordWrap: "break-word",
                            hyphens: "auto"}}>{this.props.pinyin}</h4>
                <h6 style={{overflowWrap: "break-word",
                            wordWrap: "break-word",
                            hyphens: "auto"}}>{this.props.definition}</h6>
                <a style={{lineHeight: "0.2"}} href={this.props.link} target="_blank" rel="noopener noreferrer">More info found on LINE Dict</a>
            </div>
        )
    }
}

export default CharDisplay;
