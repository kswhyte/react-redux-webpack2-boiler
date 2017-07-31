import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import PatientInfo from '../PatientInfo';

// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { shallow } from 'enzyme';
import expect from 'expect';

const stories = storiesOf('PatientInfo', module);

stories.add('Story', () => {
  const patientInfoStory = <PatientInfo />;

  specs(() =>
    describe('Show a successful alert', () => {
      it('Should render the PatientInfo component without crashing', () => {
        let output = shallow(patientInfoStory);
        expect(output.find('.patient-info-wrapper').length).toEqual(1);
      });
    })
  );
  return patientInfoStory;
});


stories.add('Story', () => {
  const patientInfoStory = <PatientInfo />;

  specs(() =>
    describe('Show a successful header', () => {
      it('Should render the PatientInfo header in PatientInfo component', () => {
        let output = shallow(patientInfoStory);
        expect(output.find('h2').first().text()).toContain('Patient Information');
      });
    })
  );
  return patientInfoStory;
});