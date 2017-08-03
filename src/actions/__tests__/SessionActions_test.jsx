import actions from '../SessionActions';
import expect from 'expect';

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

    it('Should execute startLoginClick action and change route to home', () => {
      const data = {
        loginEmail: 'newagent@mailinator.com',
        loginPassword: 'newpassword'
      };
      let expectedAction = {
        type: 'START_LOGIN',
        data
      };
      // const routeAction
      // const afterAction
      const action = actions.startLoginClick(data);

      expect(action).toEqual(expectedAction);

//ROUTES in react router for testing
// var TestComponent = React.createClass({
//   render: function () {
//     return <div ref='wooo'>Hello!</div>;
//   }
// });
//
// var location = createLocation('/');
// var history = new MemoryHistory(['/']);
//
// var tree = testRouterTree(
//   <Router history={history} location={location}>
//     <Route path='/' component={TestComponent} />
//   </Router>
// );
//
// tree.wooo; // woooooo!
//
// function testRouterTree (router) {
//   var oldRenderFn = router.type.prototype.render;
//   router.type.innerComponentRef = 'innerComponent';
//   router.type.prototype.render = function () {
//     var renderTree = oldRenderFn.apply(this, arguments);
//     return React.cloneElement(renderTree, {
//       ref: 'innerComponent'
//     });
//   };
//   return testTree(router);
// }
    });

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
    xit('Should...', () => {
    });

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
  });

  describe('Log Out', () => {

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
