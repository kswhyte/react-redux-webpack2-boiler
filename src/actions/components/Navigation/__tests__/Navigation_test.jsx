import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import Navigation from '../Navigation';

// import { specs, describe, it } from 'storybook-addon-specifications';

import {storiesOf, describe, it, specs
} from "../../../../.storybook/facade";

import { StaticRouter } from 'react-router'

import {mount} from 'enzyme';
import expect from 'expect';

const context = {};

const stories = storiesOf('Navigation', module);

stories.add('Story', () => {
    const navigationStory = (
        <StaticRouter context={context} >
            <Navigation/>
        </StaticRouter>
    );

    specs(() => describe('Show Navigation', () => {
        it('Should render the Navigation component without crashing', () => {
            let output = mount(navigationStory);
            expect(output.find('.navigation-wrapper').length).toEqual(1);
        });
    }));
    return navigationStory;
});
