import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import SignOn from '../SignOn';

// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { shallow, mount } from 'enzyme';
import expect from 'expect';


const stories = storiesOf('SignOn', module);

stories.add('Sign On Story', () => {
  const signOnStory = (<SignOn />);

  specs(() => describe('Show a successful alert', () => {
      it('Should render the SignOn component without crashing', () => {
        let output = shallow(signOnStory);
        expect(output.find('.sign-on-wrapper').length).toEqual(1);
      });

      it('Should render with proper wording', () => {
        let output = mount(signOnStory);
        expect(output.find('.sign-on-wrapper').text()).toContain('Sign On');
        expect(output.find('.sign-on-wrapper').text()).toContain('Please enter your email address and password below');
        expect(output.find('.sign-on-wrapper').text()).toContain('Sign On');
      });
      it('Should render the SignOn component without crashing', () => {
        let output = shallow(signOnStory);
        expect(output.find('.sign-on-wrapper').text()).toContain('Sign On');
      });
    }));
  return signOnStory;
});
