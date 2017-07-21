import request from 'superagent';
import getJWT from './tokenHelper';

const firePost = (requestModel) => {
    request
        .post(requestModel.hostedUrlPath + requestModel.postRoute)
        .send(requestModel.postModel)
        .set('Accept', 'application/json')
        .set('Authorization', getJWT())
        .timeout(5000)
        .end(requestModel.requestEnd);
};

export default firePost;