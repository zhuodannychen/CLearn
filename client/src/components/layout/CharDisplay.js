
import React, { Component } from 'react';

class CharDisplay extends Component {
    render() {
        return (
            <div className="char-display container center" style={{marginTop: "10vh", 
                                                      padding: "10px", 
                                                      background: "white", 
                                                      borderRadius: "10px"}}>
                <h2>{this.props.hanzi}</h2>
                <h4 style={{overflowWrap: "break-word",
                            wordWrap: "break-word",
                            hyphens: "auto"}}>{this.props.pinyin}</h4>
                <h6 style={{overflowWrap: "break-word",
                            wordWrap: "break-word",
                            hyphens: "auto"}}>{this.props.definition}</h6>
                <h6>
                <a style={{overflowWrap: "break-word",
                            wordWrap: "break-word",
                            hyphens: "auto",
                            color: "#379df1"}}
                    href={this.props.baiduLink} target="_blank" rel="noopener noreferrer">More info on Baidu Baike</a>
                </h6>
                <h6>
                <a style={{overflowWrap: "break-word",
                            wordWrap: "break-word",
                            hyphens: "auto",
                            color: "#00c430"}}
                   href={this.props.linedictLink} target="_blank" rel="noopener noreferrer">More info on LINE Dict</a>
                </h6>
            </div>
        )
    }
}

export default CharDisplay;
