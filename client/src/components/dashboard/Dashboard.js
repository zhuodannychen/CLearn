import React, { Component } from "react";
import axios from 'axios'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import CharacterData from '../../data/characters.json'
import CharGrid from '../layout/CharGrid'
import CharDisplay from '../layout/CharDisplay'


const knowWords = new Array(5000).fill(false)
const blackStyle = {margin: "10px", background: "#333333", color: "#FFFFFF", boxShadow: "1px 1px #333333"}
const whiteStyle = {margin: "10px", background: "#FFFFFF", color: "#333333", boxShadow: "1px 1px #333333"}

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            currentHanzi: "的",
            currentPinyin: "de/dí/dì",
            currentDefinition: "(possessive particle)/of, really and truly, aim/clear",
            currentLink: "https://dict.naver.com/linedict/zhendict/dict.html#/cnen/search?query=的",
            currentKnowledge: knowWords,
            tabIndex: 0
        }
    }

    componentDidMount = () => {
        this.getCount()
    }

    showItems = (start, end) => {
        let stuff = []
        for (let index = start; index < end; index++) {
            let charDetail = CharacterData[index]
            stuff.push(
                <div key={index}>
                    <div id={index} onClick={() => this.handleCharChange(index)}>
                        <CharGrid id={index+1}
                                hanzi={charDetail.hanzi}
                                onClick={this.state.currentKnowledge[index] === "false" ? () => this.handleIncrementCount(index) : () => this.handleDecrementCount(index)}
                                //incrementCount={() => this.handleIncrementCount(index)}
                                //decrementCount={() => this.handleDecrementCount(index)}
                                style={this.state.currentKnowledge[index] === "true" ? blackStyle : whiteStyle}
                                />
                    </div>
                </div>
            )
        }
        return stuff
    }

    getCount = () => {
        axios.get('/api/users/' + this.props.auth.user.id)
            .then((response) => {
                let newKnowledge = response.data.currentknowledge
                newKnowledge = newKnowledge.split(',')

                this.setState({ count: response.data.count, currentKnowledge: newKnowledge, tabIndex: response.data.tabindex })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    handleCharChange = (index) => {
        this.setState({
            currentHanzi: CharacterData[index]["hanzi"],
            currentPinyin: CharacterData[index]["pinyin"],
            currentDefinition: CharacterData[index]["definition"],
            currentLink: "https://dict.naver.com/linedict/zhendict/dict.html#/cnen/search?query="+CharacterData[index]["hanzi"]
        })
    }

    handleIncrementCount = (index) => {
        let currentCount = this.state.count
        let newCount = currentCount+1
        let newKnow = this.state.currentKnowledge

        newKnow[index] = "true"
        this.setState({ count: newCount, currentKnowledge: newKnow })

        let newKnowString = newKnow.toString()
        let countObject = { count: newCount, currentknowledge: newKnowString, tabindex: this.state.tabIndex }
        axios.post(`/api/users/update/${this.props.auth.user.id}`, countObject)
                .then(res => {
                    const data = res.data
                })
                .catch(err => {
                    console.log(err)
                })
    }

    handleDecrementCount = (index) => {
        let currentCount = this.state.count
        let newCount = currentCount-1
        let newKnow = this.state.currentKnowledge

        newKnow[index] = "false"
        this.setState({ count: newCount, currentKnowledge: newKnow })

        let newKnowString = newKnow.toString()
        let countObject = { count: newCount, currentknowledge: newKnowString, tabindex: this.state.tabIndex }
        axios.post("/api/users/update/"+this.props.auth.user.id, countObject)
                .then(res => {
                    const data = res.data
                })
                .catch(err => {
                    console.log(err)
                })
    }

render() {
    const { name } = this.props.auth.user;
        return (
            <div className="container-fluid" style={{marginTop: "15px"}}>
                <Link to="/">
                    <i className="fa fa-arrow-left" style={{margin: "10px"}}></i> Back to home
                </Link>
                <div className="row text-center">
                    <Tabs className="col-8" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList>
                        <Tab>1</Tab>
                        <Tab>2</Tab>
                        <Tab>3</Tab>
                        <Tab>4</Tab>
                        <Tab>5</Tab>
                        <Tab>6</Tab>
                        <Tab>7</Tab>
                        <Tab>8</Tab>
                        <Tab>9</Tab>
                        <Tab>10</Tab>
                        <Tab>11</Tab>
                        <Tab>12</Tab>
                        <Tab>13</Tab>
                        <Tab>14</Tab>
                        <Tab>15</Tab>
                        <Tab>16</Tab>
                        <Tab>17</Tab>
                        <Tab>18</Tab>
                        <Tab>19</Tab>
                        <Tab>20</Tab>
                    </TabList>

                    <TabPanel>{this.showItems(0, 250)}</TabPanel>
                    <TabPanel>{this.showItems(250, 500)}</TabPanel>
                    <TabPanel>{this.showItems(500, 750)}</TabPanel>
                    <TabPanel>{this.showItems(750, 1000)}</TabPanel>
                    <TabPanel>{this.showItems(1000, 1250)}</TabPanel>
                    <TabPanel>{this.showItems(1250, 1500)}</TabPanel>
                    <TabPanel>{this.showItems(1500, 1750)}</TabPanel>
                    <TabPanel>{this.showItems(1750, 2000)}</TabPanel>
                    <TabPanel>{this.showItems(2000, 2250)}</TabPanel>
                    <TabPanel>{this.showItems(2250, 2500)}</TabPanel>
                    <TabPanel>{this.showItems(2500, 2750)}</TabPanel>
                    <TabPanel>{this.showItems(2750, 3000)}</TabPanel>
                    <TabPanel>{this.showItems(3000, 3250)}</TabPanel>
                    <TabPanel>{this.showItems(3250, 3500)}</TabPanel>
                    <TabPanel>{this.showItems(3500, 3750)}</TabPanel>
                    <TabPanel>{this.showItems(3750, 4000)}</TabPanel>
                    <TabPanel>{this.showItems(4000, 4250)}</TabPanel>
                    <TabPanel>{this.showItems(4250, 4500)}</TabPanel>
                    <TabPanel>{this.showItems(4500, 4750)}</TabPanel>
                    <TabPanel>{this.showItems(4750, 5000)}</TabPanel>
                </Tabs>

                    <div className="col-4" style={{padding: "13px", position: "fixed", top: 0, bottom: 0, right: 0, overflowY: "scroll", background: "#333333"}}>
                        <h5 style={{marginTop: "10px", color: "#FFFFFF"}}>You know {this.state.count} of 5000 characters</h5>
                        <CharDisplay hanzi={this.state.currentHanzi}
                                     pinyin={this.state.currentPinyin}
                                     definition={this.state.currentDefinition}
                                     link={this.state.currentLink}/>

                        <div style={{marginTop: "10px"}}>
                            <h4 className="username" style={{color: "#FFFFFF"}}>Welcome <b style={{color: "#AAAAAA"}}>{name.split(" ")[0]}</b>!</h4>
                        </div>
                        <button
                            style={{
                                
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                            onClick={this.onLogoutClick}
                            className="logout btn btn-primary"
                        >
                        Logout
                        </button>
                    </div>
                </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);
