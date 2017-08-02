import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import SignOn from '../SignOn';
import sessionActions from '../../../actions/SessionActions';

// import { specs, describe, it } from 'storybook-addon-specifications';
import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { shallow, mount } from 'enzyme';
import expect, { createSpy, spyOn, isSpy } from 'expect';
import { StaticRouter } from 'react-router';

const stories = storiesOf('SignOn', module);

stories.add('Sign On Page Elements', () => {
  const props = {
    validationMessage: 'Please enter a valid email'
  };

  const signOnStory = (
    <StaticRouter {...props} context={{}}>
      <SignOn />
    </StaticRouter>
  );

  specs(() =>
    describe('SignOn Page elements and content', () => {
      it('Should render the SignOn component without crashing', () => {
        let output = mount(signOnStory);
        expect(output.find('.sign-on-wrapper').length).toEqual(1);
      });

      it('Should have a header element that says "Sign On"', () => {
        let output = mount(signOnStory);
        expect(output.find('h2').text()).toContain('SIGN ON');
      });
      it('Should have a <p> tag that says "please enter your email address and password below"', () => {
        let output = mount(signOnStory);
        expect(output.find('p').text()).toContain('Please enter your email address and password below');
      });
      it('Should have two input form fields', () => {
        let output = mount(signOnStory);
        expect(output.find('input').length).toEqual(2);
      });
      it('Should have two input form fields: username/email and password', () => {
        let output = mount(signOnStory);
        expect(output.find('#loginEmail').length).toEqual(1);
        expect(output.find('#loginPassword').length).toEqual(1);
      });
      it('Should have one call-to-action submit button', () => {
        let output = mount(signOnStory);
        expect(output.find('button').length).toEqual(1);
        expect(output.find('.hg-button').length).toEqual(1);
      });
      it('Should have one link: "Forgot Password"', () => {
        let output = mount(signOnStory);
        expect(output.find('a').length).toEqual(1);
        expect(output.find('a').text()).toContain('Forgot your password?');
      });
    })
  );
  return signOnStory;
});

stories.add('Clicking Submit', () => {
  const props2 = {
    validationMessage: 'Please enter a valid email'
  };

  const signOnStory2 = (
    <StaticRouter context={{}}>
      <SignOn {...props2} />
    </StaticRouter>
  );

  specs(() =>
    describe('Clicking Submit', () => {
      it('Should display an error message if email info is incorrect', () => {
        let output = mount(signOnStory2);
        expect(output.find('h5').text()).toContain('Please enter a valid email');
        // TODO: need to add functionality for recovering password after 2nd attempt; use a counter
      });
      it('Should get an error message and message asking if you would like to recover your password after your second attempt', () => {
        let output = mount(signOnStory2);
        // TODO: need to add functionality for recovering password after 2nd attempt; use a counter
      });
      it('Should send post with an object that contains username, password to endpoint', () => {
        let output = mount(signOnStory2);
        const userData = {
          loginEmail: 'newagent@mailinator.com',
          loginPassword: 'newpassword'
        };
        let currentRoute = window.location;

        sessionActions.startLoginClick(userData);
        // TODO: think about how to best check that the data is sent through with "startLoginClick(data)"
      });
      it('Should display red text and red bottom border for username and password if the form was submitted without any text added to each input field', () => {
        let output = mount(signOnStory2);
        // TODO: need to add error message at top of screen to indicate user has not filled out required fields
      });
    })
  );
  return signOnStory2;
});

stories.add('Remember Me Checkbox', () => {
  const props3 = {
    validationMessage: 'Please enter a valid email'
  };

  const signOnStory3 = (
    <StaticRouter context={{}}>
      <SignOn {...props3} />
    </StaticRouter>
  );

  let createSpy = expect.createSpy;
  let spyOn = expect.spyOn;
  let isSpy = expect.isSpy;

  specs(() =>
    describe('Clicking "Remember Me" checkbox', () => {
      it('Should store username and NOT the password in local storage, if not found in local storage', () => {
        let output = mount(signOnStory3);
        let loginInfo = {
          loginEmail: 'newagent@mailinator.com',
          loginPassword: 'newpassword'
        };

        let spy = expect.createSpy();
        window.localStorage.setItem('loginInfo', loginInfo);

        spy();
        output.find('.fa-check').simulate('click');
        output.find('.hg-button').simulate('click');
        expect(spy).toHaveBeenCalled();
        expect(spy.calls.length).toEqual(1);
        // expect(window.localStorage.getItem('')).toEqual('');

        spy.restore();
        expect.restoreSpies();
        // TODO: need to actually set localStorage, then check it for added loginInfo credentials
      });
      it('Should check local storage; If the user login username is there, the username input field should be filled out', () => {
        let output = mount(signOnStory3);
        expect(output.find('#loginPassword').text()).toNotExist();
        expect(output.find('#loginEmail').text()).toNotExist();

        // TODO: check that these input fields don't have text, then that they do
        // expect(output.find('#loginPassword').text()).toExist();
        // expect(output.find('#loginEmail').text()).toExist();
      });
    })
  );

  return signOnStory3;
});
