import request from 'superagent';

const fireGet = (requestModel,dispatch) => {
        dispatch(actions.startSpinner());
    const onEnd = (err, res) => {
        dispatch(actions.stopSpinner());
        requestModel.requestEnd(err, res);
    }

    onEnd(null, null);
};
export default fireGet;
