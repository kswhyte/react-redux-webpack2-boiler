import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import ChangePasswordConfirm from '../ChangePasswordConfirm';

// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { mount } from 'enzyme';
import { StaticRouter } from 'react-router';
import expect from 'expect';

const stories = storiesOf('ChangePasswordConfirm', module);
const props = {
}
stories.add('ChangePasswordConfirm Page Story', () => {
  const changePasswordConfirmStory = (
    <StaticRouter {...props} context={{}}>
      <ChangePasswordConfirm {...props} />
    </StaticRouter>
  );
  specs(() =>
    describe('Show a successful alert', () => {
      it('Should render the ChangePasswordConfirm component without crashing', () => {
        let output = mount(changePasswordConfirmStory);
        expect(output.find('.change-password-confirm-wrapper').exists()).toBe(true)
      });
      it('Should have a header element that says "Password Updated"', () => {
        let output = mount(changePasswordConfirmStory);
        expect(output.find('h2').text()).toContain('PASSWORD UPDATED');
      });
      it('Should have correct p tag contents', () => {
        let output = mount(changePasswordConfirmStory);
        expect(output.find('p').text()).toContain('Your password has been updated. Follow the link below to login with your updated credentials.');
      });

    })
  );
  return changePasswordConfirmStory;
});
