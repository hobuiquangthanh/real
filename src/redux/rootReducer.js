
import { combineReducers } from 'redux';


import mapboxReducer from './mapbox/mapbox.reducer';


const rootReducer = combineReducers({

    mapbox: mapboxReducer,

});

export default rootReducer;