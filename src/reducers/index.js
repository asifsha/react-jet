import {combineReducers} from 'redux';
import grid from './gridReducer';
import items from './itemReducer';
import itemTypes from './itemTypeReducer';


const rootReducer= combineReducers({
    
    
    grid,
    items,
    itemTypes    
});

export default rootReducer;
