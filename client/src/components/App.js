import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import {connect} from "react-redux"
import history from '../history/history'
import ModalBasicExample from './modal/ModalBasicExample'
import Header from './header/Header'
import HomePage from './pages/homePage/HomePage'
import FavoritesPage from './pages/favoritesPage/FavoritesPages'
import {favoritesList} from '../json/favoritesList'
import {fetchFavoritesWeather, fetchItemDisplay, fetchPosition} from '../actions/actions'
import "../style/app.css"

class App extends React.Component {
    state = {position: null, errorMessage: null};

    componentDidMount() {
        favoritesList.map(data => {
            return this.props.fetchFavoritesWeather(data.Key, data.LocalizedName)

        });
        //display tel aviv city by default if the user refuse to share position
        this.props.fetchItemDisplay("215854", "Tel Aviv");
        this.props.fetchPosition()
    }


    render() {
        return (
            <Router history={history}>
                <div className="ui container">
                    <Header/>
                    <Switch>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route exact path="/favorites">
                            <FavoritesPage/>
                        </Route>
                    </Switch>
                    <ModalBasicExample/>
                </div>

            </Router>

        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
};
export default connect(
    mapStateToProps, {fetchFavoritesWeather, fetchItemDisplay, fetchPosition}
)(App);
