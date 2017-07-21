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
    startSessionSuccess: () => ({
        type: types.START_SUCCESS
    }),
    startSessionFail: () => ({
        type: types.START_FAIL
    }),
    startSessionTimeout: () => ({
        type: types.START_TIMEOUT
    })
};

const thunks = {
    startSessionClick: () => {
        return (dispatch) => {
            console.log("Session Started Maybe?");
            //Will retrieve from User Management;
            const agent = {
                UserId: 1,
                UserName: 'DRob',
                FirstName: 'Danny',
                LastName: 'Robinson',
            };
            const postModel = startSessionRequest(dispatch, agent);
            dispatch(actions.startSpinner());
            dispatch(actions.startSession(postModel.postModel));
            firePost(postModel);
        };
    }
};

export default {
    ...actions,
    ...thunks
}