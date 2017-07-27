import * as types from '../constants/actionTypes';
// import startSessionRequest from '../actionRequests/startSessionRequest';
// import firePost from '../../tools/firePost';

const actions = {
  toggle_header: headerSize => ({
    type: types.TOGGLE_HEADER,
    headerSize
  })
};

export default {
  ...actions
};
