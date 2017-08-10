import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import ResetPasswordConfirm from '../ResetPasswordConfirm';

// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { shallow, mount } from 'enzyme';
import { StaticRouter } from 'react-router';
import expect from 'expect';

const stories = storiesOf('ResetPasswordConfirm', module);
const props = {
}
stories.add('ResetPasswordConfirm Page Story', () => {
  const resetPasswordConfirmStory = (
    <StaticRouter {...props} context={{}}>
      <ResetPasswordConfirm {...props} />
    </StaticRouter>
  );
  specs(() =>
    describe('ResetPasswordConfirm page and functionality', () => {
      it('Should render the ResetPasswordConfirm component without crashing', () => {
        let output = mount(resetPasswordConfirmStory);
        expect(output.find('.reset-password-confirm-wrapper').exists()).toBe(true)
      });
      it('Should have a header element that says "Reset Your Password"', () => {
        let output = mount(resetPasswordConfirmStory);
        expect(output.find('h2').text()).toContain('RESET YOUR PASSWORD');
      });
      it('Should have a <p> tag that says "An email was sent to you with further instructions on how to retrieve your password."', () => {
        let output = mount(resetPasswordConfirmStory);
        expect(output.find('p').text()).toContain('An email was sent to you with further instructions onhow to retrieve your password.');
      });
      it('Should have one span icon/font from linearicons', () => {
        let output = mount(resetPasswordConfirmStory);
        expect(output.find('.lnr-checkmark-circle').length).toEqual(1);
      });
      it('Should have a "Sign On" button to return to login', () => {
        let output = mount(resetPasswordConfirmStory);
        expect(output.find('a').length).toEqual(1);
        expect(output.find('.primary-btn').length).toEqual(1);
      });
    })
  );
  return resetPasswordConfirmStory;
});
