import * as types from './actionTypes';
import ItemApi from '../api/mockItemsApi';
import ServiceApi from '../api/serviceApi';

export const GetItems = () => {
  return dispatch => {
    return ItemApi.getAllItems().then(items => {
      dispatch(loadItemsSuccess(items));
    }).catch(error => {
      throw (error);
    });

  }
}

export const loadItemsSuccess = (items) => {
  return {type: types.GET_ITEMS_SUCCESS, items};
}


// export const GetItemTypes = () => {
//   return dispatch => {
//     return ItemApi.getAllItems().then(items => {
//       dispatch(loadItemTypesSuccess(items));
//     }).catch(error => {
//       throw (error);
//     });

//   }
// }

// export const loadItemTypesSuccess = (items) => {
//   return {type: types.GET_ITEMS_TYPES_SUCCESS, items};
// }


export const GetItemTypes = () => {
  return dispatch => {
    return ServiceApi.getTypes().then(itemTypes => {
      dispatch(loadItemTypesSuccess(itemTypes));
    }).catch(error => {
      throw (error);
    });

  }
}

export const loadItemTypesSuccess = (itemTypes) => {
  return {type: types.GET_ITEMS_TYPES_SUCCESS, itemTypes};
}

export const createItemSuccess = (item) => {
  return { type: types.CREATE_ITEMS_SUCCESS, item };
}

export const updateItemSuccess = (item) => {
  return { type: types.UPDATE_ITEMS_SUCCESS, item };
}

export const saveItem=(item) => {
  return dispatch => {      
      return ServiceApi.saveItem(item).then(savedItem => {
          item.id ? dispatch(updateItemSuccess(savedItem)) :
              dispatch(createItemSuccess(savedItem));
      }).catch(error => {
         // dispatch(ajaxCallError(error));            
          throw error;
      });

  };
}

// export function saveCourse(course) {
//   return function (dispatch, getState) {
//       dispatch(beginAjaxCall());
//       return courseApi.saveCourse(course).then(savedCourse => {
//           course.id ? dispatch(updateCourseSuccess(savedCourse)) :
//               dispatch(createCourseSuccess(savedCourse));
//       }).catch(error => {
//           dispatch(ajaxCallError(error));            
//           throw error;
//       });

//   };
// }