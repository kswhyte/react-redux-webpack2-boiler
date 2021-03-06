import actions from '../../src/actions/SessionActions';

const firePost = (requestModel, dispatch) => {
    dispatch(actions.startSpinner());
    const onEnd = (err, res) => {
        dispatch(actions.stopSpinner());
        requestModel.requestEnd(err, res);
    }

    onEnd(null, null);
};

export default firePost;
