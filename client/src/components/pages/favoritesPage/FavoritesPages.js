import React from 'react'
import {connect} from 'react-redux'
import {removeItemFromFavorites, changeItemDisplay} from '../../../actions/actions'
import icon from '../../../weatherIcon/iconWeather'
import '../../../style/favoritesList.css'

class FavoritesPage extends React.Component {
    renderFavorite = () => {
        let toObjectFavoritesList = Object.keys(this.props.favoritesList).map(key => ({
            id  : key,
            data: this.props.favoritesList[key]
        }));

        if (toObjectFavoritesList[0]) {
            return toObjectFavoritesList.map((datas, index) => {
                return <div className="ui cards" key={index}>
                    <div className="card renderInfo">
                        <div className="content">
                            <img className="right floated mini ui image" alt={datas.data.name}
                                 src={`${icon[`icon${datas.data['WeatherIcon']}`]}`}/>
                            <div className="header">
                                {datas.data.name}
                            </div>
                            <div className="meta">
                                {
                                    this.props.valueMetricOrImperial === "C°"
                                        ?
                                        `${datas.data.Temperature.Metric.Value} ${datas.data.Temperature.Metric.Unit}°`
                                        :
                                        `${datas.data.Temperature.Imperial.Value} ${datas.data.Temperature.Imperial.Unit}°`
                                }
                            </div>
                            <div className="description">
                                {datas.data.WeatherText}
                            </div>
                        </div>
                        <div className="extra content">
                            <div className="ui two buttons">
                                <div className="ui basic red button" onClick={e => {
                                    this.props.removeItemFromFavorites(datas.id)
                                }}>
                                    Remove
                                </div>
                                <div className="ui basic positive button" onClick={
                                    e => {
                                        this.props.changeItemDisplay(datas.id, datas.data.name).then()
                                    }
                                }>View
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            })
        }
    };

    render() {
        return (
            <div className='favoritesLists' style={{paddingTop: `50px`}}>
                {this.renderFavorite()}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        favoritesList        : state.favoritesList,
        valueMetricOrImperial: state.valueMetricOrImperial,
        modeLightOrDark      : state.modeLightOrDark
    }
};
export default connect(
    mapStateToProps, {removeItemFromFavorites, changeItemDisplay}
)(FavoritesPage);
