import validateEmail from '../isEmail.es';
import expect from 'expect';

describe('validateEmail helper function', () => {
  it('Should validate an email', () => {
    //Arrange
    const email = 'userpatient@info.com'
    let expectedValidation = true;
    //Act
    const validatedEmail = validateEmail(email);
    //Assert
    expect(validatedEmail).toEqual(expectedValidation);
  });
});
