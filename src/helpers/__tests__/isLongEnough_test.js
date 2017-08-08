import isLongEnough from '../isLongEnough.es';
import expect from 'expect';

describe('isLongEnough helper function', () => {
  it('Should determine if a word is long enough', () => {
    //Arrange
    const word = 'userpatient'
    let expectedValidation = true;
    //Act
    const validatedWord = isLongEnough(word, 10);
    //Assert
    expect(validatedWord).toEqual(expectedValidation);
  });
});
