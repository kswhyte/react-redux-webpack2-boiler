import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import Header from '../Header';
import { StaticRouter } from 'react-router'

// import { specs, describe, it } from 'storybook-addon-specifications';

import {storiesOf, describe, it, specs
} from "../../../../.storybook/facade";

import {mount} from 'enzyme';
import expect from 'expect';

const context = {};

const logout = () => {console.log("Log Out!")};

const stories = storiesOf('Header', module);

stories.add('Story', () => {
  const headerStory = (
    <StaticRouter context={context} >
        <Header logout={logout} />
    </StaticRouter>);

  specs(() => describe('Show a successful alert', () => {
    it('Should render the Header component without crashing', () => {
        let output = mount(headerStory);
        expect(output.find('header').length).toEqual(1);
    });
    it('Should have three links', () => {
      let output = mount(headerStory);
      expect(output.find('a').length).toEqual(3);
    });
    it('Should have a sign-in status', () => {
      let output = mount(headerStory);
      expect(output.find('.sign-in-status').text()).toContain('Currently signed in as');
    });
    it('Should have an option in the top header for "Dashboard"', () => {
      let output = mount(headerStory);
      expect(output.find('.dashboard-text').text()).toContain('Dashboard');
    });
    it('Should have an option in the top header for "Settings"', () => {
      let output = mount(headerStory);
      expect(output.find('.settings-text').text()).toContain('Settings');
    });
    it('Should have an option in the subheader to "Logout"', () => {
      let output = mount(headerStory);
      expect(output.find('.logout').text()).toContain('Log out');
    });
  }));
  return headerStory;
});
