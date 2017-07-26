import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from '../Welcome';

// import { specs, describe, it } from 'storybook-addon-specifications';

import {storiesOf, describe, it, specs
} from "../../../../.storybook/facade";

import {shallow} from 'enzyme';
import expect from 'expect';

const createCall = () => {
    console.log("Beginning the call");
}

const startProps = {
    createCall,
    startError: null,
}

const errorProps = {
    createCall,
    startError: 'ERROR',
}

const timeoutProps = {
    createCall,
    startError: 'TIMEOUT',
}

const stories = storiesOf('Welcome', module);

stories.add('Welcome page main story', () => {
    const welcomeStory = (<Welcome {...startProps} />);
    specs(() => describe('Show the main start call page', () => {
        it('Show the main start call page', () => {
            let output = shallow(welcomeStory);
            expect(output.find('.start-call-banner-block').length).toEqual(1);
            expect(output.find('h1').first().text()).toContain('Welcome');
        });
    }));
    return welcomeStory;
});

stories.add('Welcome page main error story', () => {
    const welcomeStory = (<Welcome {...errorProps} />);
    specs(() => describe('Show a generic somethine went wrong error', () => {
        it('Show a generic somethine went wrong error', () => {
            let output = shallow(welcomeStory);
            expect(output.find('h3').first().text()).toContain('Something went wrong');
        });
    }));
    return welcomeStory;
});

stories.add('Welcome page timeout error story', () => {
    const welcomeStory = (<Welcome {...timeoutProps} />);
    specs(() => describe('Show a timeout error', () => {
        it('Show a timeout error', () => {
            let output = shallow(welcomeStory);
            expect(output.find('h3').first().text()).toContain('Request timed out');
        });
    }));
    return welcomeStory;
});