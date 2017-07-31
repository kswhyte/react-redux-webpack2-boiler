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

const stories = storiesOf('Header', module);

stories.add('Story', () => {
    const headerStory = (
        <StaticRouter context={context} >
            <Header/>
        </StaticRouter>);

    specs(() => describe('Show a successful alert', () => {
        it('Should render the Header component without crashing', () => {
            let output = mount(headerStory);
            expect(output.find('header').length).toEqual(1);
        });
    }));
    return headerStory;
});
