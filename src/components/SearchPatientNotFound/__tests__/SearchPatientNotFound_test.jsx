import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import SearchPatientNotFound from '../SearchPatientNotFound';

// import { specs, describe, it } from 'storybook-addon-specifications';

import {storiesOf, describe, it, specs
} from "../../../../.storybook/facade";

import { shallow, mount } from 'enzyme';
import expect from 'expect';


const stories = storiesOf('SearchPatientNotFound', module);

stories.add('Search Patient Story', () => {
  const searchPatientNotFoundStory = (
    <SearchPatientNotFound/>);

  specs(() => describe('When a Patient is Not Found', () => {
    describe('Patient NotFound elements and content', () => {
      it('Should render the SearchPatientNotFound component without crashing', () => {
        let output = shallow(searchPatientNotFoundStory);
        expect(output.find('.search-patient-notfound-wrapper').length).toEqual(1);
      });

      it('Should have a header element that says "This Patient is not found in hg smartaccess"', () => {
        let output = mount(searchPatientNotFoundStory);
        expect(output.find('h3').text()).toContain('This Patient is not found in hg smartaccess.');
      });

      it('Should have one call-to-action Create New Patient button', () => {
        let output = mount(searchPatientNotFoundStory);
        expect(output.find('button').length).toEqual(1);
      });
    });
  }));
  return searchPatientNotFoundStory;
});
