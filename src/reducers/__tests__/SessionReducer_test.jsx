import reducer from '../SessionReducer';
import expect from 'expect';
import {describe, it} from "../../../../.storybook/facade";

import types from '../../constants/actionTypes';

const defaultState = {
                headerSize: null,
                showSpinner: false,
                startError: null
            };

describe('Session Reducer', () => {
    it ('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([
            defaultState
        ])
    });
    it('should handle START_FAIL', () => {
        expect(
          reducer([], {
            type: types.START_FAIL
          })
        ).toEqual([
          {
            headerSize: null,
            showSpinner: false,
            startError: 'ERROR'
          }
        ])
    });
    it('should handle START_TIMEOUT', () => {
        expect(
          reducer([], {
            type: types.START_TIMEOUT
          })
        ).toEqual([
          {
            headerSize: null,
            showSpinner: false,
            startError: 'TIMEOUT'
          }
        ])
    });
});