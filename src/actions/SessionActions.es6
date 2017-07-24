import * as types from '../constants/actionTypes';
import startSessionRequest from '../actionRequests/startSessionRequest';
import firePost from '../../tools/firePost';

const actions = {
    toggle_header: headerSize => ({
        type: types.TOGGLE_HEADER,
        headerSize
    }),
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
    })
};

const thunks = {
    startSessionClick: () => {
        return (dispatch) => {
            //TODO: Will retrieve from User Management;
            const agent = {
                UserId: 4,
                UserName: 'DRob',
                FirstName: 'Danny',
                LastName: 'Robinson',
            };
            const postModel = startSessionRequest(dispatch, agent);
            dispatch(actions.startSession(postModel.postModel));
            firePost(postModel, dispatch);
        };
    }
};

export default {
    ...actions,
    ...thunks
}