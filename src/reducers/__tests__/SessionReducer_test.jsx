import reducer from '../SessionReducer';
import expect from 'expect';
import {describe, it} from "../../../.storybook/facade";

import * as types from '../../constants/actionTypes';

const defaultState = {
                headerSize: null,
                showSpinner: false,
                startError: null
            };

describe('Session Reducer', () => {
    it ('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            defaultState
        )
    });
    it('should handle START_FAIL', () => {
        expect(
          reducer([], {
            type: types.START_FAIL
          })
        ).toEqual(
          {
            startError: 'ERROR'
          }
        )
    });
    it('should handle START_TIMEOUT', () => {
        expect(
          reducer([], {
            type: types.START_TIMEOUT
          })
        ).toEqual(
          {
            startError: 'TIMEOUT'
          }
        )
    });
});