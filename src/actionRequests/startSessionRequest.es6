import actions from '../actions/SessionActions';
import environmentRoutes from '../environmentRoutes';
import Moment from 'moment';

const startSessionRequest = (dispatch, agent) => {
    console.log("Process Node: ", process.env.NODE_ENV);
    const hostedUrlPath = environmentRoutes[process.env.NODE_ENV];
    const postRoute = '/call';
    const startTime = Moment().format('L, h:mm:ss a');
    const createDate = Moment().format('l');
    const postModel = {
        StartTime: startTime,
        CreateDate: createDate,
        ModifiedDate: createDate,
        UserId: agent.UserId,
        CreatedBy: agent.FirstName + agent.LastName,
        ModifiedBy: agent.UserName,
        CallNote: ''
    };

    const requestEnd = (err, res) => {
        if(res && res.status === 401) {
            window.location.assign('/login/');
            return;
        }
        if (err && err.timeout) {
            dispatch(actions.startCallTimeout(res || err));
            return;
        }
        if (err || !res || res.status !== 201) {
            console.log("Errs and whatnot; ", err, res);
            dispatch(actions.startSessionFail(res || err));
            return;
        }
        dispatch(actions.startSessionSuccess(res.body));
        window.location.assign('/patientsearch/');
    };

    return {hostedUrlPath, postRoute, requestEnd, postModel};
};

export default startSessionRequest;