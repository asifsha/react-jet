import {combineReducers} from 'redux';
import counter from './counterReducer';
import grid from './gridReducer';
import items from './itemReducer';
import itemTypes from './itemTypeReducer';
// import { routerReducer } from 'react-router-redux'

//import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer= combineReducers({
    
    counter,
    grid,
    items,
    itemTypes
    //ajaxCallsInProgress
});

export default rootReducer;
