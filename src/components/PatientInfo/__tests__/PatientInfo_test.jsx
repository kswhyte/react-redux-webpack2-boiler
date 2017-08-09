import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import PatientInfo from '../PatientInfo';

// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { shallow } from 'enzyme';
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
    })
  );
  return patientInfoStory;
});
