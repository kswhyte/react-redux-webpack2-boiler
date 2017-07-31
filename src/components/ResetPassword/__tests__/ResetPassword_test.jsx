import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import ResetPassword from '../ResetPassword';

// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { shallow, mount } from 'enzyme';
import expect from 'expect';

const stories = storiesOf('ResetPassword', module);

stories.add('Reset Password Story', () => {
  const resetPasswordStory = (<ResetPassword />);

  specs(() => describe('Show a successful alert', () => {
      it('Should render the resetPassword component without crashing', () => {
        let output = shallow(resetPasswordStory);
        expect(output.find('.reset-password-wrapper').length).toEqual(1);
      });

      it('Should render with proper wording', () => {
        let output = mount(resetPasswordStory);
        expect(output.find('.reset-password-wrapper').text()).toContain('Reset Password');
        expect(output.find('.reset-password-wrapper').text()).toContain('Please enter your email address and password below');
        expect(output.find('.reset-password-wrapper').text()).toContain('Reset Password');
      });
      it('Should render the resetPassword component without crashing', () => {
        let output = shallow(resetPasswordStory);
        expect(output.find('.reset-password-wrapper').text()).toContain('Reset Password');
      });
    }));
  return resetPasswordStory;
});
