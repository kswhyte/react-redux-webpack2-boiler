import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from '../Welcome';

// import { specs, describe, it } from 'storybook-addon-specifications';

import {storiesOf, describe, it, specs
} from "../../../../.storybook/facade";

import {shallow, mount} from 'enzyme';
import expect from 'expect';

const createCall = () => {
    console.log("Beginning the call");
}

const startProps = {
    createCall,
    showError: false,
    startCallTimeout: false
}

const errorProps = {
    createCall,
    showError: true,
    startCallTimeout: false
}

const timeoutProps = {
    createCall,
    showError: false,
    startCallTimeout: true
}

const stories = storiesOf('Welcome', module);

stories.add('Welcome page main story', () => {
    const welcomeStory = (<Welcome {...startProps} />);
    specs(() => describe('Show the main start call page', () => {
        it('Show the main start call page', () => {
            let output = mount(welcomeStory);
            expect(output.find('.start-call-banner-block').length).toEqual(1);
            expect(output.find('.new-session-button').text()).toContain('Begin New Session');
            expect(output.find('.start-call-banner-block').text()).toContain('Welcome');
        });
    }));
    return welcomeStory;
});

stories.add('Welcome page main error story', () => {
    const welcomeStory = (<Welcome {...errorProps} />);
    specs(() => describe('Show a generic somethine went wrong error', () => {
        it('Show a generic somethine went wrong error', () => {
            let output = mount(welcomeStory);
            expect(output.find('h3').text()).toContain('Something went wrong');
        });
    }));
    return welcomeStory;
});

stories.add('Welcome page timeout error story', () => {
    const welcomeStory = (<Welcome {...timeoutProps} />);
    specs(() => describe('Show a timeout error', () => {
        it('Show a timeout error', () => {
            let output = mount(welcomeStory);
            expect(output.find('h3').text()).toContain('Request timed out');
        });
    }));
    return welcomeStory;
});