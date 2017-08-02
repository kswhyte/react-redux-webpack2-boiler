import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import Dashboard from '../Dashboard';

// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { shallow, mount } from 'enzyme';
import expect from 'expect';

const createCall = () => {
  console.log('Beginning the call');
};

const startProps = {
  createCall,
  startError: null
};

const errorProps = {
  createCall,
  startError: 'ERROR'
};

const timeoutProps = {
  createCall,
  startError: 'TIMEOUT'
};

const stories = storiesOf('Dashboard', module);

stories.add('Dashboard page main story', () => {
  const dashboardStory = <Dashboard {...startProps} />;
  specs(() =>
    describe('Show the main start call page', () => {
      it('Show the main start call page', () => {
        let output = shallow(dashboardStory);
        expect(output.find('.start-call-banner-wrapper').length).toEqual(1);
        expect(output.find('h1').first().text()).toContain('Dashboard');
      });
    })
  );
  return dashboardStory;
});

stories.add('Dashboard page main error story', () => {
  const dashboardStory = <Dashboard {...errorProps} />;
  specs(() =>
    describe('Show a generic somethine went wrong error', () => {
      it('Show a generic somethine went wrong error', () => {
        let output = shallow(dashboardStory);
        expect(output.find('h3').first().text()).toContain('Something went wrong');
      });
    })
  );
  return dashboardStory;
});

stories.add('Dashboard page timeout error story', () => {
  const dashboardStory = <Dashboard {...timeoutProps} />;
  specs(() =>
    describe('Show a timeout error', () => {
      it('Show a timeout error', () => {
        let output = shallow(dashboardStory);
        expect(output.find('h3').first().text()).toContain('Request timed out');
      });
    })
  );
  return dashboardStory;
});
