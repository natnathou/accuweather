import React, {Component} from 'react'
import {Link} from "react-router-dom"
import DropdownMetricImperial from "./DropdownMetricImperial"
import DropdownDark from "./DropdownDark"


class Header extends Component {

    constructor(props) {
        super(props);
        this.state       = {toggle: false};
        this.refPushable = React.createRef()
    }

    Toggle = () => {
        this.setState({toggle: !this.state.toggle})

    };

    handleClick = () => {
        this.refPushable.current.style.cssText = "display: none"
        this.setState({toggle: false})
    };

    render() {
        return (
            <div>
                <div className="ui grid">
                    {/*for bigScreen*/}
                    <div className="computer only row">
                        <div className="column">
                            <div className="ui secondary pointing menu barMenu" style={{paddingBottom: `10px`}}>
                                <Link to="/" className="item menuHeader">
                                    <h2>
                                        Weather App
                                    </h2>
                                </Link>
                                <h4 className="right menu">
                                    <div className="item">
                                        <Link to="/" className="item menuLink">
                                            Home
                                        </Link>
                                        <Link to="/favorites" className="item menuLink">
                                            Favorites
                                        </Link>
                                    </div>
                                    <DropdownMetricImperial/>
                                    <DropdownDark/>
                                </h4>
                            </div>
                        </div>
                    </div>
                    {/*for smallScreen*/}
                    <div className="tablet mobile only row">
                        <div className="column">
                            <div className="ui secondary pointing menu barMenu" style={{paddingBottom: `10px`}}>
                                <Link to="/" className="item menuHeader">
                                    <h2>
                                        Weather App
                                    </h2>
                                </Link>
                                <div className="right menu">
                                    <DropdownMetricImperial/>
                                    <DropdownDark/>
                                    <div className="item">
                                        <div id="mobile_item" className="item menuHeader" onClick={this.Toggle}><i
                                            className="bars icon"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {
                    this.state.toggle
                        ?
                        <div className="overflowCondition containerPushable">
                            <div className="Pushables" ref={this.refPushable} onClick={this.handleClick}>
                                <div className="ui floated right">
                                    <div className="ui vertical menu">

                                        <Link to="/" className="item menuLink">
                                            Home
                                        </Link>
                                        <Link to="/favorites" className="item menuLink">
                                            Favorites
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        :
                        null
                }
            </div>


        );
    }
}

export default Header
