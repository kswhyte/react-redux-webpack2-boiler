import actions from '../HeaderActions';
import expect from 'expect';

describe('Header Actions', () => {
  describe('Header Toggle', () => {
    it('Should toggle the header', () => {
      //Arrange
      const headerSize = {
        headerSize: 'small'
      };
      let expectedAction = {
        type: 'TOGGLE_HEADER',
        headerSize
      };
      //Act
      const action = actions.toggleHeader(headerSize);
      //Assert
      expect(action).toEqual(expectedAction);
    });
  });
});
