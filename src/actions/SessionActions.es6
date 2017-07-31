import loginRequest from '../actionRequests/loginRequest';
import startSessionRequest from '../actionRequests/startSessionRequest';
import firePost from '../../tools/firePost';
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
  startLoginClick: () => {
    return dispatch => {
      //TODO: Will retrieve from form
      const loginCredentials = {};
      const postModel = loginRequest(dispatch, loginCredentials);
      dispatch(actions.startLogin(postModel.postModel));
      firePost(postModel, dispatch);
    };
  }
};

export default {
  ...actions,
  ...thunks
};
