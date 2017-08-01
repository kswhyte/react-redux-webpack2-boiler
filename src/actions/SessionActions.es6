import loginRequest from '../actionRequests/mocks/loginRequest';
import startSessionRequest from '../actionRequests/mocks/startSessionRequest';
import firePost from '../../tools/mocks/firePost';
import sStorage from '../../tools/sessionStorage_helper';
import * as types from '../constants/actionTypes';

const actions = {
  startSpinner: () => ({
    type: types.START_SPINNER
  }),
  stopSpinner: () => ({
    type: types.STOP_SPINNER
  }),
  startSession: data => ({
    type: types.START_SESSION,
    data
  }),
  startSessionSuccess: data => ({
    type: types.START_SUCCESS,
    data
  }),
  startSessionFail: err => ({
    type: types.START_FAIL,
    err
  }),
  startSessionTimeout: err => ({
    type: types.START_TIMEOUT,
    err
  }),
  startLogin: data => ({
    type: types.START_LOGIN,
    data
  }),
  loginSuccess: data => ({
    type: types.LOGIN_SUCCESS,
    data
  }),
  loginFail: err => ({
    type: types.LOGIN_FAIL,
    err
  }),
  logoutSuccess: data => ({
    type: types.LOGOUT_SUCCESS,
    data
  }),
  validationError: data => ({
    type: types.VALIDATION_ERROR,
    data
  })
};

const thunks = {
  startSessionClick: () => {
    return dispatch => {
      //TODO: Will retrieve from User Management;
      const agent = {};
      const postModel = startSessionRequest(dispatch, agent);
      dispatch(actions.startSession(postModel.postModel));
      firePost(postModel, dispatch);
    };
  },
  startLoginClick: data => {
    return dispatch => {
      //TODO: Will retrieve from form
      const loginCredentials = data;
      const postModel = loginRequest(dispatch, loginCredentials);
      dispatch(actions.startLogin(postModel.postModel));
      firePost(postModel, dispatch);
    };
  },
  logoutClick: () => {
    return dispatch => {
      sStorage.removeItem({ key: 'user' });
      sStorage.removeItem({ key: 'isUserLoggedIn' });
      dispatch(actions.logoutSuccess());
    };
  }
};

export default {
  ...actions,
  ...thunks
};
