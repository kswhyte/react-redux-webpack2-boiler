import delay from './delay';

const logged_in_user = {
  name : "wes"
}

class LoginApi {
  //login user
  static loginUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, logged_in_user));
      }, delay)
    })
  }

}

export default LoginApi;
