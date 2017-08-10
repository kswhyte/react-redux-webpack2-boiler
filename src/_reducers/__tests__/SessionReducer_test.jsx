import sessionReducer from '../SessionReducer';
import expect from 'expect';
import { describe, it } from '../../../.storybook/facade';

import * as types from '../../constants/actionTypes';

describe('Session Reducer', () => {
  it('should handle START_SPINNER', () => {
    expect(
      sessionReducer([], {
        type: types.START_SPINNER
      })
    ).toEqual({
      showSpinner: true
    });
  });

  it('should handle STOP_SPINNER', () => {
    expect(
      sessionReducer([], {
        type: types.STOP_SPINNER
      })
    ).toEqual({
      showSpinner: false
    });
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

  it('should handle START_SUCCESS', () => {
    expect(
      sessionReducer([], {
        type: types.START_SUCCESS
      })
    ).toEqual({
      startError: null,
      sessionStarted: true
    });
  });

  it('should handle START_SESSION', () => {
    expect(
      sessionReducer([], {
        type: types.START_SESSION
      })
    ).toEqual({
      startError: null
    });
  });

  it('should handle START_LOGIN', () => {
    expect(
      sessionReducer([], {
        type: types.START_LOGIN
      })
    ).toEqual({
      loginError: null,
      validationMessage: ''
    });
  });

  it('should handle LOGIN_FAIL', () => {
    let action = {
      type: 'LOGIN_FAIL',
       err: {
         validationMessage: "Testing"
        }
    };
    expect(
      sessionReducer([], {
        type: types.LOGIN_FAIL,
        validationMessage: "Testing"
      })
    ).toEqual({
      loginError: 'ERROR',
      validationMessage: action.err.validationMessage
    });
  });

  it('should handle VALIDATION_ERROR', () => {
    let action = {
      data: undefined
    }
    expect(
      sessionReducer([], {
        type: types.VALIDATION_ERROR
      })
    ).toEqual({
      validationMessage: action.data
    });
  });

  it('Should handle SHOW_MODAL', () => {
    let action = {
      type: 'SHOW_MODAL',
      modal: "LOGOUT_MODAL"
    };
    expect(
      sessionReducer([], {
        type: types.SHOW_MODAL,
        modal: 'LOGOUT_MODAL'
      })
    ).toEqual({
      currentModal: 'LOGOUT_MODAL'
    });
 });

  it('Should handle HIDE_MODAL', () => {
    let action = {
      type: 'HIDE_MODAL'
    };
    expect(
      sessionReducer([], {
        type: types.HIDE_MODAL
      })
    ).toEqual({
      currentModal: null
    });
   });

  it('should handle RESETPASSWORD_START', () => {
    let action = {
      type: 'RESETPASSWORD_START'
    }
    expect(
      sessionReducer([], {
        type: types.RESETPASSWORD_START
      })
    ).toEqual({
      email: action.message
    });
  });
});
