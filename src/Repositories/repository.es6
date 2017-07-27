import { URI } from '../../tools/app_config';

class LoginApi {

  static loginUser() {
    return new Promise((resolve, reject) => {
      console.log('hosted-url pagth : ', URI.baseUISVC_URI);
      resolve(URI.baseUISVC_URI);
    });
  }

}

export default LoginApi;
