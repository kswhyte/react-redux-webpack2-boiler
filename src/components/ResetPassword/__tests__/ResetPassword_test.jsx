import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import ResetPassword from '../ResetPassword';

// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { shallow } from 'enzyme';
import expect from 'expect';

const stories = storiesOf('ResetPassword', module);

stories.add('ResetPassword Page Story', () => {
  const resetPasswordStory = <ResetPassword />;
  specs(() =>
    describe('Show a successful alert', () => {
      it('Should render the ResetPassword component without crashing', () => {
        let output = shallow(resetPasswordStory);
        expect(output.find('.reset-password-wrapper').length).toEqual(1);
      });
    })
  );
  return resetPasswordStory;
});
