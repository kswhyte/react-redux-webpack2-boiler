import LoginApi from '../repository';

describe('True Repository ---', () => {
  describe('Has Login Endpoint ----', () => {
    it('Should return a promise', () => {
      //arrange

      //act
      const actual = LoginApi.loginUser();

      //assert
      expect(typeof actual).toBe('object')
    })
    it('Should return a promise with a URI of "/uisvc/v1_0/oas-bp-uisvc/api/" ', () => {
      //arrange
      expect.assertions(1);
      const URI_expected = '/uisvc/v1_0/oas-bp-uisvc/api/';

      //act
      const actual = LoginApi.loginUser();

      //assert
      return LoginApi.loginUser().then(data => {
        console.log("data from pormise ---- : ", data);
        expect(data).toBe(URI_expected);
      })
    })
  })
})
