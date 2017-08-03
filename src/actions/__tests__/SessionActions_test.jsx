import actions from '../SessionActions';
import expect from 'expect';

// let createSpy = expect.createSpy;
// let spyOn = expect.spyOn;
// let isSpy = expect.isSpy;

describe('Session Actions', () => {
  describe('Cancel Action', () => {
    it('Should start a session successfully', () => {
      //Arrange
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

      //Act
      const action = actions.startSessionSuccess(data);

      //Assert
      expect(action).toEqual(expectedAction);
    });

    it('Should create an ERROR on start session', () => {
      //Arrange
      const err = `500 : Error on Start Session`;

      let expectedAction = {
        type: 'START_FAIL',
        err
      };

      //Act
      const action = actions.startSessionFail(err);

      //Assert
      expect(action).toEqual(expectedAction);
    });

    it('Should create an ERROR on start session', () => {
      //Arrange
      const err = `500 : Timeout`;

      let expectedAction = {
        type: 'START_TIMEOUT',
        err
      };

      //Act
      const action = actions.startSessionTimeout(err);

      //Assert
      expect(action).toEqual(expectedAction);
    });
    // it('Should store username and NOT the password in local storage, if not found in local storage', () => {
    //   let output = mount(signOnStory3);
    //   let loginInfo = {
    //     loginEmail: 'newagent@mailinator.com',
    //     loginPassword: 'newpassword'
    //   };
    //
    //   let spy = expect.createSpy();
    //   window.localStorage.setItem('loginInfo', loginInfo);
    //
    //   spy();
    //   output.find('.fa-check').simulate('click');
    //   output.find('.hg-button').simulate('click');
    //   expect(spy).toHaveBeenCalled();
    //   expect(spy.calls.length).toEqual(1);
    //   // expect(window.localStorage.getItem('')).toEqual('');
    //
    //   spy.restore();
    //   expect.restoreSpies();
    //   // TODO: need to actually set localStorage, then check it for added loginInfo credentials
    // });

    // it('Should send post with an object that contains username, password to endpoint', () => {
    //   let output = mount(signOnStory2);
    //   const userData = {
    //     loginEmail: 'newagent@mailinator.com',
    //     loginPassword: 'newpassword'
    //   };
    //   let currentRoute = window.location;
    //
    //   sessionActions.startLoginClick(userData);
    //   // TODO: think about how to best check that the data is sent through with "startLoginClick(data)"
    // });

    // it('Should check local storage; If the user login username is there, the username input field should be filled out', () => {
    //   let output = mount(signOnStory3);
    //   expect(output.find('#loginPassword').text()).toNotExist();
    //   expect(output.find('#loginEmail').text()).toNotExist();
    //
    //   // TODO: check that these input fields don't have text, then that they do
    //   // expect(output.find('#loginPassword').text()).toExist();
    //   // expect(output.find('#loginEmail').text()).toExist();
    // });
  });
});
