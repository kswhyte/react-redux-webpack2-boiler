import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import PatientAppointments from '../PatientAppointments';

// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { shallow } from 'enzyme';
import expect from 'expect';

const stories = storiesOf('PatientAppointments', module);

stories.add('Story', () => {
  const patientAppointmentsStory = <PatientAppointments />;

  specs(() =>
    describe('Show a successful alert', () => {
      it('Should render the PatientAppointments component without crashing', () => {
        let output = shallow(patientAppointmentsStory);
        expect(output.find('.patient-appointments-wrapper').length).toEqual(1);
      });
    })
  );
  return patientAppointmentsStory;
});
