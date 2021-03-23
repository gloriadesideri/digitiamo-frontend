import {combineReducers} from "redux";
import routeReducer from './routesReducer'

export default combineReducers({
    routes: routeReducer,
})
