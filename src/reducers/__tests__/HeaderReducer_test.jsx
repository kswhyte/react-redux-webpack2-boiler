import headerReducer from '../HeaderReducer';
import expect from 'expect';
import { describe, it } from '../../../.storybook/facade';

import * as types from '../../constants/actionTypes';

describe('Header Reducer', () => {
  it('should return the initial state', () => {
    expect(headerReducer(undefined, {})).toEqual({});
  });
  it('should handle TOGGLE_HEADER', () => {
    //Arrange
    const store = {};
    const action = {
      type: types.TOGGLE_HEADER,
      headerSize: 'full'
    };

    //Act
    const headerReducerResult = headerReducer(store, action);
    const expected = {
      headerSize: 'full'
    };

    //Assert
    expect(headerReducerResult).toEqual(expected);
  });
});
