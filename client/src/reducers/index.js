import {combineReducers} from 'redux'
import valueSearchBarReducers from './valueSearchBarReducers'
import errorReducer from './errorReducer'
import listResultSearchCityReducer from './listResultSearchCityReducer'
import favoritesListReducer from './favoritesListReducer'
import itemToDisplayReducer from './itemToDisplayReducer'
import metricOrImperialReducer from './metricOrImperialReducer'
import modeLightOrDarkReducer from './modeLightOrDarkReducer'


export default combineReducers({
    valueSearchBar       : valueSearchBarReducers,
    listResultSearchCity : listResultSearchCityReducer,
    error                : errorReducer,
    favoritesList        : favoritesListReducer,
    itemToDisplay        : itemToDisplayReducer,
    valueMetricOrImperial: metricOrImperialReducer,
    modeLightOrDark      : modeLightOrDarkReducer
})