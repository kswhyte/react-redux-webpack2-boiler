import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import ResetPasswordConfirm from '../ResetPasswordConfirm';

// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { shallow } from 'enzyme';
import expect from 'expect';

const stories = storiesOf('ResetPasswordConfirm', module);

stories.add('ResetPasswordConfirm Page Story', () => {
  const resetPasswordConfirmStory = <ResetPasswordConfirm />;
  specs(() =>
    describe('Show a successful alert', () => {
      it('Should render the ResetPasswordConfirm component without crashing', () => {
        let output = shallow(resetPasswordConfirmStory);
        expect(output.find('.reset-password-confirm-wrapper').length).toEqual(1);
      });
    })
  );
  return resetPasswordConfirmStory;
});
