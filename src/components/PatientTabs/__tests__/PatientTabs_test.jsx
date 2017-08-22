import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import PatientTabs from '../PatientTabs';
import { StaticRouter } from 'react-router'

// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { mount } from 'enzyme';
import expect from 'expect';

const context = {};
const stories = storiesOf('PatientTabs', module);

stories.add('Story', () => {
  const patientTabsStory = (
      <StaticRouter context={context}>
        <PatientTabs />
      </StaticRouter>
    );

  specs(() =>
    describe('Show a successful alert', () => {
      it('Should render the PatientTabs component without crashing', () => {
        let output = mount(patientTabsStory);
        expect(output.find('.patient-tabs-wrapper').length).toEqual(1);
      });

      it('Should have two buttons: "BACK" and "NEXT"', () => {
        let output = mount(patientTabsStory);
        expect(output.find('.back-btn').length).toEqual(1);
        expect(output.find('.next-btn').length).toEqual(1);
      });

      it('Should have two call-to-action buttons', () => {
        let output = mount(patientTabsStory);
        expect(output.find('button').length).toEqual(2);
      });

    })
  );
  return patientTabsStory;
});
