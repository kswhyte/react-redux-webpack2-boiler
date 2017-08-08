import actions from '../../actions/SessionActions';
import { URI } from '../../../tools/app_config';
// import routeActions from './routeActions';
import sStorage from '../../../tools/sessionStorage_helper';

const loginRequest = dispatch => {
  const hostedUrlPath = URI.baseUISVC_URI;
  const postRoute = '/#fake';
  const postModel = {
    username: 'saminathan.v@happiestminds.com',
    password: 'newpassword',
    grant_type: 'password',
    client_id: 'bookingportal'
  };

  const requestEnd = () => {
    const _res = {
      body: {
        access_token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6InNhbWluYXRoYW4udkBoYXBwaWVzdG1pbmRzLmNvbSIsInJvbGUiOiJNYW5hZ2VyIiwiQ2xpZW50SWQiOiIxIiwiU3BvbnNvciI6Ik9DSFNOUiIsImlzcyI6Imh0dHA6Ly93d3cuaGVhbHRoZ3JhZGVzLmNvbS91aXN2Yy92MV8wL29hcy1icC13ZWIiLCJhdWQiOiJib29raW5ncG9ydGFsIiwiZXhwIjoxNTAxMjQxOTU3LCJuYmYiOjE1MDExNTU1NTd9.si2MfnS5Io4G4zPZ2YED9A68varo2lCCCudD9ZLBr6o',
        token_type: 'bearer',
        expires_in: 86399,
        clientkey: 'bookingportal',
        firstName: 'Saminathan',
        lastName: 'v',
        userName: 'saminathan.v@happiestminds.com',
        '.issued': 'Thu, 27 Jul 2017 11:39:17 GMT',
        '.expires': 'Fri, 28 Jul 2017 11:39:17 GMT'
      }
    };
    sStorage.setItem({ key: 'user', value: JSON.stringify(_res.body) });
    sStorage.setItem({ key: 'isUserLoggedIn', value: true });
    dispatch(actions.loginSuccess(_res.body));

    /* // FOR TESTING ERRORS
      _res.err = {

      };
      dispatch(actions.loginFail(_res.err));
      */

    //use routes instead of window.location
    ///window.location.assign('/');
    // dispatch(routeActions.changeRoute({ route: '/' }));
  };

  return { hostedUrlPath, postRoute, requestEnd, postModel };
};

export default loginRequest;
