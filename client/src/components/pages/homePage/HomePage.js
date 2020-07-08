import React from 'react'
import SearchBar from './searchBar/SearchBar'
import {connect} from 'react-redux'
import {removeItemFromFavorites, addItemToFavorites} from '../../../actions/actions'
import icon from '../../../weatherIcon/iconWeather'
import "../../../style/homePage.css"

const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

class HomePage extends React.Component {

    render5Days = () => {
        // we check id the user choose metric or imperial
        switch (this.props.valueMetricOrImperial) {
            case "C°":
                return this.props.itemToDisplay.day5dataCelsius.data.map((datas, index) => {
                    let day = new Date(datas.Date);
                    return <div className="ui cards" key={index} style={{width: `200px`, paddingTop: `50px`}}>
                        <div className="card days_5_card">
                            <div className="content">
                                <img className="right floated mini ui image" alt={datas.Day.Icon}
                                     src={`${icon[`icon${datas.Day.Icon}`]}`}/>
                                <div className="header">
                                    {weekday[day.getDay()]}
                                </div>
                                <div
                                    className="meta"
                                >
                                    <div className="maxAndMin">
                                        <div>
                                            Minimum:
                                        </div>
                                        <div>
                                            {`${datas.Temperature.Minimum.Value} ${datas.Temperature.Minimum.Unit}°`}
                                        </div>
                                    </div>
                                    <div className="maxAndMin">
                                        <div>
                                            Maximum:
                                        </div>
                                        <div>
                                            {`${datas.Temperature.Maximum.Value} ${datas.Temperature.Maximum.Unit}°`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                });

            case "F°":
                return this.props.itemToDisplay.day5dataFahrenheit.data.map((datas, index) => {
                    let day = new Date(datas.Date)
                    return <div className="ui cards" key={index} style={{width: `200px`, paddingTop: `50px`}}>
                        <div className="card days_5_card">
                            <div className="content">
                                <img className="right floated mini ui image" alt={datas.Day.Icon}
                                     src={`${icon[`icon${datas.Day.Icon}`]}`}/>
                                <div className="header">
                                    {weekday[day.getDay()]}
                                </div>
                                <div
                                    className="meta"
                                >
                                    <div className="maxAndMin">
                                        <div>
                                            Minimum:
                                        </div>
                                        <div>
                                            {`${datas.Temperature.Minimum.Value} ${datas.Temperature.Minimum.Unit}°`}
                                        </div>
                                    </div>
                                    <div className="maxAndMin">
                                        <div>
                                            Maximum:
                                        </div>
                                        <div>
                                            {`${datas.Temperature.Maximum.Value} ${datas.Temperature.Maximum.Unit}°`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                });

            default:
                return null
        }
    };


    renderInfo = () => {
        let datas = this.props.itemToDisplay.item;
        if (this.props.itemToDisplay.item) {
            return <div className="ui segment renderInfo" style={{width: `100%`}}>
                <div className="homeInfo">
                    <h2 className="ui header">
                        <img alt={datas.name} src={`${icon[`icon${datas.data['WeatherIcon']}`]}`}/>
                        <div className="content">
                            {datas.name}
                            <div className="sub header">
                                {
                                    this.props.valueMetricOrImperial === "C°"
                                        ?
                                        `${datas.data.WeatherText}, ${datas.data.Temperature.Metric.Value} ${datas.data.Temperature.Metric.Unit}°` :
                                        `${datas.data.WeatherText}, ${datas.data.Temperature.Imperial.Value} ${datas.data.Temperature.Imperial.Unit}°`
                                }
                            </div>
                        </div>
                    </h2>
                    <div>
                        {
                            this.props.favoritesList[datas.id]
                                ?
                                <i className="heart icon red"
                                   onClick={e => this.props.removeItemFromFavorites(datas.id)}
                                ></i>
                                :
                                <i className="heart outline icon pick"
                                   onClick={e => this.props.addItemToFavorites(datas.id, datas.name, datas.data)}
                                ></i>
                        }
                    </div>
                </div>
                <div className="favoritesLists">
                    {this.render5Days()}
                </div>
            </div>
        }
    };

    render() {
        return (
            <div>
                <SearchBar/>
                <div className='favoritesLists' style={{marginTop: `100px`}}>
                    {this.renderInfo()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        favoritesList        : state.favoritesList,
        itemToDisplay        : state.itemToDisplay,
        valueMetricOrImperial: state.valueMetricOrImperial,
        modeLightOrDark      : state.modeLightOrDark
    }
};
export default connect(
    mapStateToProps, {removeItemFromFavorites, addItemToFavorites}
)(HomePage);
