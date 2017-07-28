import sessionReducer from '../SessionReducer';
import expect from 'expect';
import { describe, it } from '../../../.storybook/facade';

import * as types from '../../constants/actionTypes';

describe('Session Reducer', () => {
  it('should return the initial state', () => {
    expect(sessionReducer(undefined, {})).toEqual({});
  });
  it('should handle START_FAIL', () => {
    expect(
      sessionReducer([], {
        type: types.START_FAIL
      })
    ).toEqual({
      startError: 'ERROR'
    });
  });
  it('should handle START_TIMEOUT', () => {
    expect(
      sessionReducer([], {
        type: types.START_TIMEOUT
      })
    ).toEqual({
      startError: 'TIMEOUT'
    });
  });
});
