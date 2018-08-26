import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default (state = initialState.items, action) => {
    switch (action.type) {
        case types.GET_ITEMS_SUCCESS:
            return action.items;

        case types.CREATE_ITEMS_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.item)
            ];

        case types.UPDATE_ITEMS_SUCCESS:
        console.log('in update store');
        console.log(state);
        console.log(action.item.id);
            return [
                ...state.filter(item => item.id !== action.item.id),
                Object.assign({}, action.item)
            ];
        
        case types.DELETE_ITEMS_SUCCESS:
        return [
            ...state.filter(item => item.id !== action.item.id)
        ];
            
        default:
            return state;
    }
}





