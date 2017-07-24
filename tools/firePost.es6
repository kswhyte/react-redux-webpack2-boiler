import request from 'superagent';
import getJWT from './tokenHelper';
import actions from '../src/actions/SessionActions';

const firePost = (requestModel, dispatch) => {
    dispatch(actions.startSpinner());
    const onEnd = (err, res) => {
        dispatch(actions.stopSpinner());
        requestModel.requestEnd(err, res);
    }
    request
        .post(requestModel.hostedUrlPath + requestModel.postRoute)
        .send(requestModel.postModel)
        .set('Accept', 'application/json')
        .set('Authorization', getJWT())
        .timeout(5000)
        .end(onEnd);
};

export default firePost;