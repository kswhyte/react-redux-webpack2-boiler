import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import ConfirmPatientInfo from '../ConfirmPatientInfo';

// import { specs, describe, it } from 'storybook-addon-specifications';

import {storiesOf, describe, it, specs
} from "../../../../.storybook/facade";

import {shallow} from 'enzyme';
import expect from 'expect';


const stories = storiesOf('ConfirmPatientInfo', module);

stories.add('Story', () => {
    const confirmPatientInfoStory = (
      <ConfirmPatientInfo/>);

    specs(() => describe('Show a successful alert', () => {
        it('Should render the ConfirmPatientInfo component without crashing', () => {
            let output = shallow(confirmPatientInfoStory);
            expect(output.find('.confirm-patient-info-block').length).toEqual(1);
        });
    }));
    return confirmPatientInfoStory;
});
