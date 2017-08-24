import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import App from '../App';

// import { specs, describe, it } from 'storybook-addon-specifications';

import {storiesOf, describe, it, specs
} from "../../../../.storybook/facade";

import {shallow} from 'enzyme';
import expect from 'expect';


const stories = storiesOf('App', module);

stories.add('Story', () => {
    const appStory = (
      <App/>);

    specs(() => describe('Show a successful alert', () => {
        it('Should render the App component without crashing', () => {
            let output = shallow(appStory);
            expect(output.find('.app-wrapper').length).toEqual(1);
        });
    }));
    return appStory;
});
