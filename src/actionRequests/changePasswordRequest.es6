/*eslint no-unused-vars: */

import actions from '../../actions/SessionActions';
import { URI } from '../../../tools/app_config';
import routeActions from '../../actions/routeActions';

const resetPasswordRequest = (dispatch, ...args) => {
  const hostedUrlPath = URI.baseUISVC_URI;
  const postRoute = '/#fake';
  const postModel = {
    email: 'john@doe.com'
  };

  const requestEnd = () => {
    const _res = {
      body: {
        message: 'Success. The recovery email has been sent.'
      }
    };
    dispatch(actions.startResetPassword(_res.body));

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

export default resetPasswordRequest;
