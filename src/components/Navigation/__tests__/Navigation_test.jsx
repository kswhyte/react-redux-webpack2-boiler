import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import Navigation from '../Navigation';

// import { specs, describe, it } from 'storybook-addon-specifications';

import {storiesOf, describe, it, specs
} from "../../../../.storybook/facade";

import {shallow} from 'enzyme';
import expect from 'expect';


const stories = storiesOf('Navigation', module);

stories.add('Story', () => {
    const navigationStory = (
      <Navigation/>);

    specs(() => describe('Show a successful alert', () => {
        it('Should render the Navigation component without crashing', () => {
            let output = shallow(navigationStory);
            expect(output.find('.navigation-wrapper').length).toEqual(1);
        });
    }));
    return navigationStory;
});
