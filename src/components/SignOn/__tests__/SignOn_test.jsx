import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import SignOn from '../SignOn';

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

  window.sessionStorage = {
    setItem: function(){},
    getItem: function(){},
    removeItem: function(){}
  };

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
        expect(output.find('.primary').length).toEqual(1);
      });
      it('Should have one link: "Forgot Password"', () => {
        let output = mount(signOnStory);
        expect(output.find('a').length).toEqual(1);
        expect(output.find('a').text()).toContain('Forgot your password?');
      });
      it('If Unsuccessful, Should display an error message with red text above the form."', () => {
        let output = mount(signOnStory);
        expect(output.find('h5').length).toEqual(1);
      });
      it('Should display red text and bottom border for username and password if no text is present in form inputs"', () => {
        let output = mount(signOnStory);
        // TODO: create functionality for making text red when no text is present
      });
    })
  );
  return signOnStory;
});
