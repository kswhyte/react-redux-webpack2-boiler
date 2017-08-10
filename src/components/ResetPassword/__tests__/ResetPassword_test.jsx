import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import ResetPassword from '../ResetPassword';

// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';
import { StaticRouter } from 'react-router';
import { shallow, mount } from 'enzyme';
import expect from 'expect';

const stories = storiesOf('ResetPassword', module);
const props = {
  resetPassword: () => {},
  validationError: () => {},
  validationMessage: 'message',
  submitPasswordRecoveryEmail: () => {}
}
stories.add('ResetPassword Page Story', () => {

  const resetPasswordStory = (
    <StaticRouter context={{}}>
      <ResetPassword {...props} />
    </StaticRouter>
  );

  specs(() =>
    describe('Show a successful alert', () => {
      it('Should render the ResetPassword component without crashing', () => {
        let output = mount(resetPasswordStory);
        expect(output.find('.reset-password-wrapper').length).toEqual(1);
      });
      it('Should have a header element that says "Reset Your Password"', () => {
        let output = mount(resetPasswordStory);
        expect(output.find('h2').text()).toContain('RESET YOUR PASSWORD');
      });
      it('Should have a <p> tag that says "Just enter your email address and we\'ll send you instructions"', () => {
        let output = mount(resetPasswordStory);
        expect(output.find('p').text()).toContain('Just enter your email and we\'ll send you instructions.');
      });
      it('Should have one input form field', () => {
        let output = mount(resetPasswordStory);
        expect(output.find('input').length).toEqual(1);
      });
      it('Should have one input form field: username/email', () => {
        let output = mount(resetPasswordStory);
        expect(output.find('#reset-email').length).toEqual(1);
      });
      it('Should have one call-to-action "Reset Password" submit button', () => {
        let output = mount(resetPasswordStory);
        expect(output.find('button').length).toEqual(1);
        expect(output.find('[type="submit"]').length).toEqual(1);
      });
      it('Should have one link: "Back to Sign in"', () => {
        let output = mount(resetPasswordStory);
        expect(output.find('a').length).toEqual(1);
        expect(output.find('a').text()).toContain('Back to Sign in');
      });
    })
  );
  return resetPasswordStory;
});
