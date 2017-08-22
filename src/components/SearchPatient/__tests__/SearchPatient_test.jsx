import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import SearchPatient from '../SearchPatient';

// import { specs, describe, it } from 'storybook-addon-specifications';

import {storiesOf, describe, it, specs
} from "../../../../.storybook/facade";

import {shallow} from 'enzyme';
import expect from 'expect';


const stories = storiesOf('SearchPatient', module);

stories.add('Search Patient Story', () => {
    const searchPatientStory = (
      <SearchPatient/>);

    specs(() => describe('Show a successful alert', () => {
        it('Should render the SearchPatient component without crashing', () => {
            let output = shallow(searchPatientStory);
            expect(output.find('.search-patient-block').length).toEqual(1);
        });
        it('Should have a header element that says "Patient Information"', () => {
            let output = shallow(searchPatientStory);
            expect(output.find('h3').text()).toContain('Patient Information');
        });
        it('Should have four input fields', () => {
            let output = shallow(searchPatientStory);
            expect(output.find('input').length).toEqual(4);
        });
        it('Should have 2 select fields', () => {
            let output = shallow(searchPatientStory);
            expect(output.find('select').length).toEqual(3);
        });
    }));
    return searchPatientStory;
});
