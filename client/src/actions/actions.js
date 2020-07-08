import accuWeather from '../api/accuWeather'
import history from '../history/history'
import {
    SEARCH_BAR_CHANGE,
    SEARCH_BAR_RESET,
    SEARCH_CITY,
    DISPLAY_MODAL,
    DISPLAY_RESULT_SEARCH_CITY,
    FETCH_FAVORITES_WEATHER,
    ADD_ITEM_FROM_FAVORITES,
    REMOVE_ITEM_FROM_FAVORITES,
    CHANGE_ITEM_DISPLAY,
    FETCH_ITEM_DISPLAY,
    RESET_RESULT_SEARCH_CITY,
    SET_MECTRIC_OR_IMPERIAL,
    SET_MODE_DARK_OR_LIGHT,
    FETCH_POSITION
} from './type'

export const displayModal = (status, message) => {
    return {type: DISPLAY_MODAL, payload: {status, message}}
};

export const setMetricOrImperial = (value) => {
    return {type: SET_MECTRIC_OR_IMPERIAL, payload: value}
};

export const setModeDarkOrLight = (value) => {
    return {type: SET_MODE_DARK_OR_LIGHT, payload: value}
};

export const fetchPosition = () => async dispatch => {
    await navigator.geolocation.getCurrentPosition(async position => {
        let response = [];
        try {
            response = await accuWeather.get(`locations/v1/cities/geoposition/search?`, {
                params: {
                    apikey  : process.env.REACT_APP_KEY_ACCU_WEATHER,
                    q       : `${position.coords.latitude},${position.coords.longitude}`,
                    language: 'en-US'

                }
            });
            dispatch(fetchItemDisplay(response.data.Key, response.data.LocalizedName))
        } catch (e) {
            dispatch(displayModal(true, e['message']))
        }

    }, err => {
        console.log(err);
        dispatch(displayModal(true, err["message"]))
    });
    dispatch({type: FETCH_POSITION})
};

export const searchBarInput = (valueInput) => {
    return {type: SEARCH_BAR_CHANGE, payload: valueInput}
};

export const resetSearchBarInput = () => {
    return {type: SEARCH_BAR_RESET}
};

export const searchCity = valueInput => async (dispatch, getState) => {
    let response = [];
    try {
        response = await accuWeather.get(`locations/v1/cities/autocomplete?`, {
            params: {
                apikey  : process.env.REACT_APP_KEY_ACCU_WEATHER,
                q       : getState().valueSearchBar,
                language: 'en-US'
            }
        });
        await dispatch(displayResultSearchCity(response.data))
    } catch (e) {
        dispatch(displayModal(true, e['message']))
    }
    dispatch({type: SEARCH_CITY, payload: valueInput})
};

export const resetSearchCity = () => {
    return {type: RESET_RESULT_SEARCH_CITY}
};

export const fetchItemDisplay = (id, name) => async dispatch => {
    let responseFahrenheit = [];
    let responseCelsius    = [];
    let response           = [];

    try {
        response           = await accuWeather.get(`currentconditions/v1/${id}?`, {
            params: {
                apikey  : process.env.REACT_APP_KEY_ACCU_WEATHER,
                details : false,
                language: 'en-US'

            }
        });
        responseCelsius    = await accuWeather.get(`forecasts/v1/daily/5day/${id}?`, {
            params: {
                apikey  : process.env.REACT_APP_KEY_ACCU_WEATHER,
                details : false,
                language: 'en-US',
                metric  : true

            }
        });
        responseFahrenheit = await accuWeather.get(`forecasts/v1/daily/5day/${id}?`, {
            params: {
                apikey  : process.env.REACT_APP_KEY_ACCU_WEATHER,
                details : false,
                language: 'en-US',
                metric  : false

            }
        });

    } catch (e) {
        await dispatch(displayModal(true, e['message']));
        return null
    }

    dispatch({
        type   : FETCH_ITEM_DISPLAY,
        payload: {
            id,
            name,
            response          : response.data[0],
            responseCelsius   : responseCelsius.data.DailyForecasts,
            responseFahrenheit: responseFahrenheit.data.DailyForecasts
        }
    })
};



export const displayResultSearchCity = citys => {
    return {type: DISPLAY_RESULT_SEARCH_CITY, payload: citys}
};


export const fetchFavoritesWeather = (id, name) => async dispatch => {
    let response = [];
    try {
        response = await accuWeather.get(`currentconditions/v1/${id}?`, {
            params: {
                apikey  : process.env.REACT_APP_KEY_ACCU_WEATHER,
                details : false,
                language: 'en-US'

            }
        });

    } catch (e) {
        await dispatch(displayModal(true, e['message']));
        return null
    }
    dispatch({type: FETCH_FAVORITES_WEATHER, payload: {id, name, response: response.data[0]}})
};

export const addItemToFavorites = (id, name, data) => {
    return {type: ADD_ITEM_FROM_FAVORITES, payload: {id, name, data}}
};


export const removeItemFromFavorites = (id) => {
    return {type: REMOVE_ITEM_FROM_FAVORITES, payload: id}
};

export const changeItemDisplay = (id, name) => async dispatch => {
    await dispatch(fetchItemDisplay(id, name));
    history.push('/');
    dispatch({type: CHANGE_ITEM_DISPLAY})
};

