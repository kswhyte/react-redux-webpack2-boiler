/*eslint no-unused-vars: */

import actions from '../../actions/SessionActions';
import { URI } from '../../../tools/app_config';
import routeActions from '../../actions/routeActions';

const loginRequest = (dispatch, ...args) => {
  const hostedUrlPath = URI.baseUISVC_URI;
  const postRoute = '/#fake';
  const postModel = {
    password: '123'
  };

  const requestEnd = () => {
    const _res = {
      body: {
        result: 'success'
      }
    };
    dispatch(actions.loginSuccess(_res.body));

    /* // FOR TESTING ERRORS
      _res.err = {

      };
      dispatch(actions.loginFail(_res.err));
      */

    //use routes instead of window.location
    ///window.location.assign('/');
    dispatch(routeActions.changeRoute({ route: '/resetpasswordconfirm' }));
  };

  return { hostedUrlPath, postRoute, requestEnd, postModel };
};

export default loginRequest;
