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
// __________________________________
    // it('Should execute startLoginClick action and change route to home', () => {
    //   const data = {
    //     loginEmail: 'newagent@mailinator.com',
    //     loginPassword: 'newpassword'
    //   };
    //   let expectedAction = {
    //     type: 'START_LOGIN',
    //     data
    //   };
    //   // const routeAction
    //   // const afterAction
    //   const action = actions.startLoginClick(data);
    //
    //   expect(action).toEqual(expectedAction);
    //
    //   let SignOn = React.createClass({
    //     render: () => {
    //       return (
    //         <div className="row">
    //           <h2>SIGN ON</h2>
    //           <div className="page-instructions col-xs-offset-4 col-xs-4">
    //             <p>Please enter your email address and password below.</p>
    //           </div>
    //         </div>
    //       )
    //     }
    //   });
    //
    //   let location = createLocation('/');
    //   let history = new MemoryHistory(['/']);
    //
    //   let tree = testRouterTree(
    //     <Router history={history} location={location}>
    //       <Route path='/' component={SignOn} />
    //     </Router>
    //   );
    //
    //   const testRouterTree = (router) => {
    //     let oldRenderFn = router.type.prototype.render;
    //     router.type.innerComponentRef = 'innerComponent';
    //     router.type.prototype.render = () => {
    //       var renderTree = oldRenderFn.apply(this, arguments);
    //       return React.cloneElement(renderTree, {
    //         ref: 'innerComponent'
    //       });
    //     };
    //     return testTree(router);
    //   }
    // });
// __________________________________
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
  describe('Clicking Submit', () => {

    describe('Remember Me', () => {
    });

    describe('When Successful', () => {
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

    describe('When Unsuccessful', () => {
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

    describe('Reset Password', () => {
      it('Should execute startResetPassword action', () => {
        const data = {
          loginEmail: 'newagent@mailinator.com',
          loginPassword: 'newpassword'
        };
        let expectedAction = {
          type: 'RESETPASSWORD_START',
          data
        };

        const action = actions.startResetPassword(data);

        expect(action).toEqual(expectedAction);
      });
      //
      // it('Should execute resetPasswordSuccess action', () => {
      //   const data = {
      //     loginEmail: 'newagent@mailinator.com',
      //     loginPassword: 'newpassword'
      //   };
      //   let expectedAction = {
      //     type: 'RESETPASSWORD_SUCCESS',
      //     data
      //   };
      //
      //   const action = actions.resetPasswordSuccess(data);
      //
      //   expect(action).toEqual(expectedAction);
      // });

      it('Should execute resetPasswordFail action', () => {
        const data = {
          loginEmail: 'newagent@mailinator.com',
          loginPassword: 'newpassword'
        };
        let expectedAction = {
          type: 'RESETPASSWORD_FAIL',
          data
        };

        const action = actions.resetPasswordFail(data);

        expect(action).toEqual(expectedAction);
      });
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
});
