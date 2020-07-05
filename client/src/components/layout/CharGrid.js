import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

class CharGrid extends Component {
/*
    changeColor() {
        const newColor = this.state.color === white ? black : white
        const newBackground = this.state.background === white ? black : white
        this.setState({ color: newColor, background: newBackground})
        if (newColor === white) {
            this.props.incrementCount()
        }
        else {
            this.props.decrementCount()
        }
    }
*/
    render() {
        return (
            <div>
                <button type="button"
                        id={this.props.id}
                        onClick={this.props.onClick}
                        style={this.props.style}                      
                        className="btn btn-secondary float-left">

                    <p className="grid-hanzi">{this.props.hanzi}</p>
                    <p className="grid-id">{this.props.id}</p>
                </button>
            </div>
        )
    }
}

CharGrid.propTypes = {
    auth: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
)(CharGrid);
  
