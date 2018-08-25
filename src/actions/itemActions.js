import * as types from './actionTypes';
import ServiceApi from '../api/serviceApi';

export const GetItems = () => {
  return dispatch => {
    return ServiceApi.getItems().then(items => {
      dispatch(loadItemsSuccess(items));
    }).catch(error => {
      throw (error);
    });

  }
}

export const loadItemsSuccess = (items) => {
  return {type: types.GET_ITEMS_SUCCESS, items};
}

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

export const deleteItemSuccess = (item) => {
  return { type: types.DELETE_ITEMS_SUCCESS, item };
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

export const deleteItem=(item) => {
  return dispatch => {      
      return ServiceApi.deleteItem(item).then(deletedItem => {
          dispatch(deleteItemSuccess(deletedItem)) ;
      }).catch(error => {
         // dispatch(ajaxCallError(error));            
          throw error;
      });
  };
}