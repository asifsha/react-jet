import * as types from './actionTypes';
import DataApi from './api/dataApi';

export const GetData = () => {
  return dispatch => {
    return DataApi.getData().then(data => {
      dispatch(loadDataSuccess(data));
    }).catch(error => {
      throw (error);
    });

  }
}


export const loadDataSuccess = (data) => {
  return {type: types.GET_DATA, data};
}