import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import ChangePassword from '../ChangePassword';

// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';
import { mount } from 'enzyme';
import expect from 'expect';

const stories = storiesOf('ChangePassword', module);

stories.add('ChangePassword Page Story', () => {
  const changePasswordStory = (
      <ChangePassword />
  );

  specs(() =>
    describe('Show a successful alert', () => {
      it('Should render the ChangePassword component without crashing', () => {
        let output = mount(changePasswordStory);
        expect(output.find('.change-password-wrapper').length).toEqual(1);
      });
      it('Should have two input fields', () => {
        let output = mount(changePasswordStory);
        expect(output.find('input').length).toEqual(2);
      });
      it('Should have a header element that says "Update Password"', () => {
        let output = mount(changePasswordStory);
        expect(output.find('h2').text()).toContain('UPDATE PASSWORD');
      });
      it('Should have a button to submit"', () => {
        let output = mount(changePasswordStory);
        expect(output.find('button').text()).toContain('CHANGE PASSWORD');
      });
    })
  );
  return changePasswordStory;
});