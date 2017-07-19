import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import Login from '../Login';

// import { specs, describe, it } from 'storybook-addon-specifications';

import {storiesOf, describe, it, specs
} from "../../../../.storybook/facade";

import {shallow} from 'enzyme';
import expect from 'expect';


const stories = storiesOf('Login', module);

stories.add('Search Patient Story', () => {
    const loginStory = (
      <Login/>);

    specs(() => describe('Show a successful alert', () => {
        it('Should render the Login component without crashing', () => {
            let output = shallow(loginStory);
            expect(output.find('.login-block').length).toEqual(1);
        });
    }));
    return loginStory;
});
