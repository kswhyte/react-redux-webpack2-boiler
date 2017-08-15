import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import PatientAppointments from '../PatientAppointments';
import Moment from 'moment';
// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { mount } from 'enzyme';
import expect from 'expect';

const stories = storiesOf('PatientAppointments', module);

Date.now = jest.fn(() => 1487076708000);

stories.add('With Appointments', () => {


  const props = {
    appointments: [{
      appointmentID: "12345",
      appointmentDateTime: Moment().add(7,'d').format(),
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    },
    {
      appointmentID: "12346",
      appointmentDateTime: Moment().add(8,'d').format(),
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    },
    {
      appointmentID: "12347",
      appointmentDateTime: Moment().add(9,'d').format(),
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    },{
      appointmentID: "12348",
      appointmentDateTime: Moment().subtract(7,'d').format(),
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    },{
      appointmentID: "12349",
      appointmentDateTime: Moment().subtract(6,'d').format(),
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
      appointmentDateTime: Moment().subtract(6,'d').format(),
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    },{
      appointmentID: "12349",
      appointmentDateTime: Moment().subtract(7,'d').format(),
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
      appointmentDateTime: Moment().add(7,'d').format(),
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    },
    {
      appointmentID: "12346",
      appointmentDateTime: Moment().add(8,'d').format(),
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    },
    {
      appointmentID: "12347",
      appointmentDateTime: Moment().add(9,'d').format(),
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    }]
  }

  const patientAppointmentsStory = <PatientAppointments {...propsFutureAppts} />;

  specs(() =>
    describe('Show a successful alert', () => {
      it('Should show Only future page', () => {
        let output = mount(<PatientAppointments {...propsFutureAppts} />);
        expect(output.find('td').length).toEqual(18);
      });
    })
  );
  return patientAppointmentsStory;
});
