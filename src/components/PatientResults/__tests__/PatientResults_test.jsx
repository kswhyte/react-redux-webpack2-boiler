import React from 'react';
import PatientResults from '../PatientResults';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { mount } from 'enzyme';
import expect from 'expect';

const stories = storiesOf('PatientResults', module);

stories.add('Story', () => {
  const patientResultsStory = (
        <PatientResults />
    );

  specs(() =>
    describe('Show up', () => {
      it('Should render the PatientResults component without crashing', () => {
        let output = mount(patientResultsStory);
        expect(output.find('.patient-results-wrapper').length).toEqual(1);
      });
    })
  );
  return patientResultsStory;
});
