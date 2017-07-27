import { URI } from '../../tools/app_config';

class LoginApi {

  static loginUser() {
    return new Promise((resolve, reject) => {
      //make call to login user
      //resolve or reject based upon response from server
      resolve(URI.baseUISVC_URI);
    });
  }

}

export default LoginApi;
