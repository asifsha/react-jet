import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      };

    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      };

    case types.DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      };

    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      };

    default:    
      return state;
  }
}





// export default function counterReducer(state = initialState.counter, action) {
//     switch (action.type) {
//         case types.INCREMENT_REQUESTED:
//         return {
//           ...state,
//           isIncrementing: true
//         };

//         case types.INCREMENT_REQUESTED:
//         return {
//           ...state,
//           count: state.count + 1,
//           isIncrementing: !state.isIncrementing
//         };
//             // return [
//             //     ...state,
//             //     Object.assign({}, action.course)
//             // ];

//         case types.UPDATE_COURSE_SUCCESS:
//             return [
//                 ...state.filter(course => course.id !== action.course.id),
//                 Object.assign({}, action.course)
//             ];

//         default:
//             return state;
//     }
// }