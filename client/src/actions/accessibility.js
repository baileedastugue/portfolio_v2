import { GET_ACCESSIBILITY, SET_ACCESSIBILITY } from './types';

export const GET_ACCESSIBILITY = () => async (dispatch) => {
     if (sessionStorage.token) {
          setAuthToken(localStorage.accessibilityEnabled);
     }
     try {
          dispatch({
               type: USER_LOADED,
               payload: res.data,
          });
     } catch (err) {
          dispatch({
               type: AUTH_ERROR,
          });
     }
};
