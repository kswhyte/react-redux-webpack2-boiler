import React from 'react';
import PatientResults from '../PatientResults';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { mount } from 'enzyme';
import expect from 'expect';

const stories = storiesOf('PatientResults', module);

stories.add('PatientResults', () => {

  const patientSearchResults = [{
          patientId: 1,
          firstName: 'Julialemon',
          lastName: 'Sugerhillgang',
          dateOfBirth: 'Feb 27, 1900',
          phone: '720-771-7277',
          zipCode: '80202',
          modified: 'Jun 16, 2017'
      },{
          patientId: 2,
          firstName: 'Julialemon',
          lastName: 'Sugarhillgang',
          dateOfBirth: 'Feb 27, 1900',
          phone: '720-771-7277',
          zipCode: '80202',
          modified: 'Jun 16, 2017'
      }];
  const patientResultsStory = (
        <PatientResults patientSearchResults={patientSearchResults} />
    );

  specs(() =>
    describe('Show up', () => {
      it('Should render the PatientResults component without crashing', () => {
        let output = mount(patientResultsStory);
        expect(output.find('.patient-results-wrapper').length).toEqual(1);
      });
      it('Should show correct number of cells', () => {
        let output = mount(patientResultsStory);
        expect(output.find('td').length).toEqual(12);
      });
      it('Should show 6 headers', () => {
        let output = mount(patientResultsStory);
        expect(output.find('th').length).toEqual(6);
      });
    })
  );
  return patientResultsStory;
});
