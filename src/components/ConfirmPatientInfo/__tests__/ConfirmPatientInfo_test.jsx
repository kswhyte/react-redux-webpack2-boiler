import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import ConfirmPatientInfo from '../ConfirmPatientInfo';
import { StaticRouter } from 'react-router';

// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { mount } from 'enzyme';
import expect from 'expect';

const stories = storiesOf('ConfirmPatientInfo', module);

const context = {};

stories.add('Story', () => {
  const confirmPatientInfoStory = (
    <StaticRouter context={context}>
      <ConfirmPatientInfo />
    </StaticRouter>
  );

  specs(() =>
    describe('Show a successful alert', () => {
      it('Should render the ConfirmPatientInfo component without crashing', () => {
        let output = mount(confirmPatientInfoStory);
        expect(output.find('.confirm-patient-info-wrapper').length).toEqual(1);
      });
    })
  );
  return confirmPatientInfoStory;
});
