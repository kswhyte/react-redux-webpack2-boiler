import LoginApi from '../repository';

describe('True Repository ---', () => {
  describe('Has Login Endpoint ----', () => {
    it('Should return a promise', () => {
      const actual = LoginApi.loginUser();
      expect(typeof actual).toBe('object')
    })
    it('Should return a promise with a URI of "/uisvc/v1_0/oas-bp-uisvc/api/" ', () => {
      //arrange
      const URI_expected = '/uisvc/v1_0/oas-bp-uisvc/api/';

      //act
      const actual = LoginApi.loginUser();

      //assert
      return LoginApi.loginUser().then(data => {
        expect(data).toBe(URI_expected);
      })
    })
  })
})
