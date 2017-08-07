import request from 'superagent';

const fireGet = (requestModel) => {
    request
        .get(requestModel.hostedUrlPath + requestModel.getRoute)
        .end(requestModel.requestEnd);
};

export default fireGet;
