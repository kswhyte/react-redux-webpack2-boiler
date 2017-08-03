import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import PatientAppointments from '../PatientAppointments';

// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { mount } from 'enzyme';
import expect from 'expect';

const stories = storiesOf('PatientAppointments', module);

stories.add('With Appointments', () => {


  const props = {
    appointments: [{
      appointmentID: "12345",
      appointmentDateTime: "2017-09-03T15:38:54-06:00",
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    },
    {
      appointmentID: "12346",
      appointmentDateTime: "2017-09-03T15:38:54-06:00",
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    },
    {
      appointmentID: "12347",
      appointmentDateTime: "2017-09-03T15:38:54-06:00",
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    },{
      appointmentID: "12348",
      appointmentDateTime: "2017-07-03T15:38:54-06:00",
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    },{
      appointmentID: "12349",
      appointmentDateTime: "2017-07-03T15:38:54-06:00",
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    }]
  }
  const patientAppointmentsStory = <PatientAppointments {...props} />;

  specs(() =>
    describe('Show a successful alert', () => {
      it('Should render the PatientAppointments component without crashing', () => {
        let output = mount(patientAppointmentsStory);
        expect(output.find('.patient-appointments-wrapper').length).toEqual(1);
      });
      it('Should show tables as expected', () => {
        let output = mount(patientAppointmentsStory);
        expect(output.find('td').length).toEqual(30);
        expect(output.find('th').length).toEqual(8);
      });

    })
  );
  return patientAppointmentsStory;
});

stories.add('With only Past Appointments', () => {

  const propsNoAppts = {
    appointments: [{
      appointmentID: "12348",
      appointmentDateTime: "2017-07-03T15:38:54-06:00",
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    },{
      appointmentID: "12349",
      appointmentDateTime: "2017-07-03T15:38:54-06:00",
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    }]
  }

  const patientAppointmentsStory = <PatientAppointments {...propsNoAppts} />;
  specs(() =>
    describe('Show a successful alert', () => {
      it('Should show only past appointments', () => {
        let output = mount(patientAppointmentsStory);
        expect(output.find('td').length).toEqual(12);
      });
    })
  );

  return patientAppointmentsStory;
});

stories.add('With No Appointments', () => {

  const propsNoAppts = {
    appointments: []
  }

  const patientAppointmentsStory = <PatientAppointments {...propsNoAppts} />;

  specs(() =>
    describe('Show a successful alert', () => {
      it('Should show message if no appointments found', () => {
        let output = mount(patientAppointmentsStory);
        expect(output.find('td').length).toEqual(0);
        expect(output.find('.page-instructions > p').text()).toContain("Patient has no appointment history");
      });
    })
  );
  return patientAppointmentsStory;
});

stories.add('With Just Future Appointments', () => {

  const propsFutureAppts = {
    appointments: [{
      appointmentID: "12345",
      appointmentDateTime: "2017-09-03T15:38:54-06:00",
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    },
    {
      appointmentID: "12346",
      appointmentDateTime: "2017-09-03T15:38:54-06:00",
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    },
    {
      appointmentID: "12347",
      appointmentDateTime: "2017-09-03T15:38:54-06:00",
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    }]
  }

  const patientAppointmentsStory = <PatientAppointments {...propsFutureAppts} />;

  specs(() =>
    describe('Show a successful alert', () => {
      it('Should show Only future page', () => {
        let output = mount(patientAppointmentsStory);
        expect(output.find('td').length).toEqual(18);
      });
    })
  );
  return patientAppointmentsStory;
});
