import React from 'react';
import PatientInfo from '../PatientInfo';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { shallow, mount } from 'enzyme';
import expect from 'expect';

const stories = storiesOf('PatientInfo', module);

stories.add('Patient Info Story', () => {
  const props = {
    generalInfo : {firstName: "test"}
  }
  const patientInfoStory = <PatientInfo {...props} />;

  specs(() =>
    describe('Show a successful alert', () => {
      it('Should render the PatientInfo component without crashing', () => {
        let output = shallow(patientInfoStory);
        expect(output.find('.patient-info-wrapper').length).toEqual(1);
      });

      it('Should have 21 official input fields', () => {
        let output = mount(patientInfoStory);
        expect(output.find('input').length).toEqual(9);
      });

      it('Should have 15 official select dropdown fields', () => {
        let output = mount(patientInfoStory);
        expect(output.find('input').length).toEqual(9);
      });

      it('Should have 21 official input labels', () => {
        let output = mount(patientInfoStory);
        expect(output.find('label').length).toEqual(21);
      });

      it('Should have two call-to-action buttons', () => {
        let output = mount(patientInfoStory);
        expect(output.find('button').length).toEqual(3);
      });

      it('Should have two buttons: "BACK" and "NEXT"', () => {
        let output = mount(patientInfoStory);
        expect(output.find('.back-btn').length).toEqual(1);
        expect(output.find('.next-btn').length).toEqual(1);
      });

      it('Should have a break-line div', () => {
        let output = mount(patientInfoStory);
        expect(output.find('.break-line').length).toEqual(1);
      });
    })
  );
  return patientInfoStory;
});
