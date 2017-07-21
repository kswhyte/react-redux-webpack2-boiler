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
        ModifiedBy: agent.UserName + agent.LastName,
        CallNote: ''
    };

    const requestEnd = (err, res) => {
        if(res && res.status === 401) {
            dispatch(actions.stopSpinner());
            window.location.assign('/login/');
            return;
        }
        if (err && err.timeout) {
            dispatch(actions.stopSpinner());
            dispatch(actions.startCallTimeout(res || err));
            return;
        }
        if (err || !res || res.status !== 201) {
            dispatch(actions.stopSpinner());
            dispatch(actions.startSessionFail(res || err));
            return;
        }

        dispatch(actions.stopSpinner());
        dispatch(actions.startSessionSuccess(res.body));
        window.routerHistory.push('/patientsearch/');
    };

    return {hostedUrlPath, postRoute, requestEnd, postModel};
};

export default startSessionRequest;