import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default (state = initialState.itemTypes, action) => {    
    switch (action.type) {        
        case types.GET_ITEMS_TYPES_SUCCESS:
            return action.itemTypes;       
        default:
            return state;
    }
}





