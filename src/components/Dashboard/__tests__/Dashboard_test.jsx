import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import {Dashboard} from '../Dashboard';

// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { shallow, mount } from 'enzyme';
import expect from 'expect';

const createCall = () => {
  console.log('Beginning the call');
};

const startProps = {
  createCall,
  startError: null,
  startSessionClick: function(){},
  history: {},
  userLoggedIn: true
};

const errorProps = {
  createCall,
  startError: 'ERROR',
  startSessionClick: function(){},
  history: {},
  userLoggedIn: true
};

const timeoutProps = {
  createCall,
  startError: 'TIMEOUT',
  startSessionClick: function(){},
  history: {},
  userLoggedIn: true
};
/* may remove this */
const jest = jest || null;
if(jest){
  window.sessionStorage = {
    setItem: function(){},
    getItem: function(){},
    removeItem: function(){}
  };
}

const stories = storiesOf('Dashboard', module);

stories.add('Dashboard page main story', () => {
  const dashboardStory = <Dashboard {...startProps} />;
  specs(() =>
    describe('Show the main start call page', () => {
      it('Show the main start call page', () => {
        let output = shallow(dashboardStory);
        expect(output.find('h2').text()).toEqual('Dashboard');
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
