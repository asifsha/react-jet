import * as types from './actionTypes';


// export function loadCoursesSuccess(courses) {
//     return { type: types.LOAD_COURSES_SUCCESS, courses };
// }

// export function createCourseSuccess(course) {
//     return { type: types.CREATE_COURSE_SUCCESS, course };
// }

// export function updateCourseSuccess(course) {
//     return { type: types.UPDATE_COURSE_SUCCESS, course };
// }


// export function loadCourses() {
//     return function (dispatch) {
//         dispatch(beginAjaxCall());
//         return courseApi.getAllCourses().then(courses => {
//             dispatch(loadCoursesSuccess(courses));
//         }).catch(error => {
//             throw error;
//         });

//     };
// }

// export function saveCourse(course) {
//     return function (dispatch, getState) {
//         dispatch(beginAjaxCall());
//         return courseApi.saveCourse(course).then(savedCourse => {
//             course.id ? dispatch(updateCourseSuccess(savedCourse)) :
//                 dispatch(createCourseSuccess(savedCourse));
//         }).catch(error => {
//             dispatch(ajaxCallError(error));            
//             throw error;
//         });

//     };
// }

// export function incrementCounter(counter) {
//     return { type: types.INCREMENT, counter };
// }

// export function incrementRequestedCounter(counter) {
//     return { type: types.INCREMENT_REQUESTED, counter };
// }

// export function decrementCounter(counter) {
//     return { type: types.DECREMENT, counter };
// }

// export function decrementRequestedCounter(counter) {
//     return { type: types.DECREMENT_REQUESTED, counter };
// }

export const increment = () => {
    return dispatch => {
      dispatch({
        type: types.INCREMENT_REQUESTED
      })
  
      dispatch({
        type: types.INCREMENT
      })
    }
  }
  
  export const incrementAsync = () => {
    return dispatch => {
      dispatch({
        type: types.INCREMENT_REQUESTED
      })
  
      return setTimeout(() => {
        dispatch({
          type: types.INCREMENT
        })
      }, 3000)
    }
  }
  
  export const decrement = () => {
    return dispatch => {
      dispatch({
        type: types.DECREMENT_REQUESTED
      })
  
      dispatch({
        type: types.DECREMENT
      })
    }
  }
  
  export const decrementAsync = () => {
    return dispatch => {
      dispatch({
        type: types.DECREMENT_REQUESTED
      })
  
      return setTimeout(() => {
        dispatch({
          type: types.DECREMENT
        })
      }, 3000)
    }
  }