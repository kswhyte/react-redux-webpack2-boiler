import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import PatientTabs from '../PatientTabs';

// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { shallow } from 'enzyme';
import expect from 'expect';

const stories = storiesOf('PatientTabs', module);

stories.add('Story', () => {
  const patientTabsStory = <PatientTabs />;

  specs(() =>
    describe('Show a successful alert', () => {
      it('Should render the PatientTabs component without crashing', () => {
        let output = shallow(patientTabsStory);
        expect(output.find('.patient-tabs-wrapper').length).toEqual(1);
      });
    })
  );
  return patientTabsStory;
});
