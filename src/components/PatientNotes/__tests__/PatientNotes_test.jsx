import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import PatientNotes from '../PatientNotes';

// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { shallow } from 'enzyme';
import expect from 'expect';

const stories = storiesOf('PatientNotes', module);

stories.add('Story', () => {
  const patientNotesStory = <PatientNotes />;

  specs(() =>
    describe('Show a successful alert', () => {
      it('Should render the PatientNotes component without crashing', () => {
        let output = shallow(<PatientNotes />);
        //act
        const lengthOf = output.find('.patient-notes-wrapper');
        expect(lengthOf.length).toEqual(1)
      });
    })
  );
  return patientNotesStory;
});
