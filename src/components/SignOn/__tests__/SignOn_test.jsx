import React from 'react';
import { Link } from 'react-router-dom';
import SignOn from '../SignOn';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { shallow, mount } from 'enzyme';
import expect, { createSpy, spyOn, isSpy } from 'expect';
import { StaticRouter } from 'react-router';




const stories = storiesOf('SignOn', module);

stories.add('Sign On Page Elements', () => {
  const props = {
    submitLogin: function(){},
    validationError: function(){},
    validationMessage: 'Please enter a valid email'
  };


  //the purpose of this check is to see if it's jest or storybook running the test
  //if it's jest, this creates a localstorage for headless tests
  if(!window.localStorage){
    global.window = {};
    const localStorage = require('mock-local-storage');
    window.localStorage = global.localStorage;
    window.sessionStorage = {
      setItem: function(){},
      getItem: function(){},
      removeItem: function(){}
    };
  }

  const signOnStory = (
    <StaticRouter {...props} context={{}}>
      <SignOn {...props} />
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

      it('Should have three input form fields', () => {
        let output = mount(signOnStory);
        expect(output.find('input').length).toEqual(3);
      });

      it('Should have two input form fields: username/email and password', () => {
        let output = mount(signOnStory);
        expect(output.find('#loginEmail').length).toEqual(1);
        expect(output.find('#loginPassword').length).toEqual(1);
      });

      it('Should have one call-to-action submit button', () => {
        let output = mount(signOnStory);
        expect(output.find('button').length).toEqual(1);
      });

      it('Should have one link: "Forgot Password"', () => {
        let output = mount(signOnStory);
        expect(output.find('a').length).toEqual(1);
        expect(output.find('a').text()).toContain('Forgot your password?');
      });

      it('Should display an animation alerting user, "Forgot Password" after 2 login attempts', () => {
        let output = mount(signOnStory);
        output.find('#loginEmail').text('s');
        output.find('#loginPassword').text('d');
        output.setState({loginAttempts: 1})
        expect(output.find('.attention-animation').length).toEqual(0)

        output.find('[type="submit"]').simulate('click');
        output.find('[type="submit"]').simulate('click');

        expect(output.find('.attention-animation').length).toEqual(1)
      });
    })
  );
  return signOnStory;
});
