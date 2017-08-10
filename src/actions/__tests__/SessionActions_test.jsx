import actions from '../SessionActions';
import expect from 'expect';
import * as types from '../../constants/actionTypes';
// import { Router, Route } from 'react-router-dom';

describe('Session Actions', () => {
  describe('Cancel Action', () => {
    it('Should start a session', () => {
      //Arrange
      const data = {
        Acknowledge: 'Start',
        StatusCode: 1,
        MessageTitle: 'Start Session',
        MessageBody: 'Session started',
        Data: null
      };
      let expectedAction = {
        type: 'START_SESSION',
        data
      };
      //Act
      const action = actions.startSession(data);
      //Assert
      expect(action).toEqual(expectedAction);
    });

    it('Should start a session successfully', () => {
      const data = {
        Acknowledge: 'Success',
        StatusCode: 1,
        MessageTitle: 'Start Session',
        MessageBody: 'Session started successfull (guid)',
        Data: null
      };
      let expectedAction = {
        type: 'START_SUCCESS',
        data
      };

      const action = actions.startSessionSuccess(data);

      expect(action).toEqual(expectedAction);
    });

    it('Should create an ERROR on start session', () => {
      const err = `500 : Error on Start Session`;
      let expectedAction = {
        type: 'START_FAIL',
        err
      };

      const action = actions.startSessionFail(err);

      expect(action).toEqual(expectedAction);
    });

    it('Should create an ERROR on start session', () => {
      const err = `500 : Timeout`;
      let expectedAction = {
        type: 'START_TIMEOUT',
        err
      };

      const action = actions.startSessionTimeout(err);

      expect(action).toEqual(expectedAction);
    });
  });

  describe('Clicking Submit', () => {
    it('Should execute startLogin action', () => {
      const data = {
        loginEmail: 'newagent@mailinator.com',
        loginPassword: 'newpassword'
      };
      let expectedAction = {
        type: 'START_LOGIN',
        data
      };

      const action = actions.startLogin(data);

      expect(action).toEqual(expectedAction);
    });
  });

  describe('ValidationError', () => {
    it('Should a validationError if credentials are invalid', () => {
      const data = 'your credentials are invalid';
      let expectedAction = {
        type: 'VALIDATION_ERROR',
        data
      };

      const action = actions.validationError(data);

      expect(action).toEqual(expectedAction);
    });
  });

  describe('When Submit is Successful', () => {
    it('Should successfully login the user', () => {
      const data = {
        loginEmail: 'newagent@mailinator.com',
        loginPassword: 'newpassword'
      };
      let expectedAction = {
        type: 'LOGIN_SUCCESS',
        data
      };

      const action = actions.loginSuccess(data);

      expect(action).toEqual(expectedAction);
    });
  });

  describe('When Submit is Unsuccessful', () => {
    it('Should get back a 404 status code indicating a failed login', () => {
      const err = `404 : Not Found`;
      let expectedAction = {
        type: 'LOGIN_FAIL',
        err
      };

      const action = actions.loginFail(err);

      expect(action).toEqual(expectedAction);
    });
  });

  describe('Log Out', () => {
    it('Should execute logoutSuccess action', () => {
      const data = {
        loginEmail: 'newagent@mailinator.com',
        loginPassword: 'newpassword'
      };
      let expectedAction = {
        type: 'LOGOUT_SUCCESS',
        data
      };

      const action = actions.logoutSuccess(data);

      expect(action).toEqual(expectedAction);
    });

    describe('Clicking Logout', () => {
    });

    describe('Clicking Logout half way through a session', () => {

      describe('Yes, Logout', () => {
      });
      describe('No, Stay', () => {
      });
    });
  });

  describe('Modals', () => {
    it('Should show a modal', () => {
      //Arrange
      const modal = 'LOGOUT_MODAL';

      let expectedAction = {
        type: types.SHOW_MODAL,
        modal
      };

      //Act
      const action = actions.showModal(modal);
      //Assert
      expect(action).toEqual(expectedAction);
    });
    it('Should hide a modal', () => {
      //Arrange
      let expectedAction = {
        type: types.HIDE_MODAL,
      };

      //Act
      const action = actions.hideModal();
      //Assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('Reset Password', () => {
    it('Should execute startResetPassword action', () => {
      const data = {
        loginEmail: 'newagent@mailinator.com',
      };
      let expectedAction = {
        type: 'RESETPASSWORD_START',
        data
      };

      const action = actions.startResetPassword(data);

      expect(action).toEqual(expectedAction);
    });
  });
});
