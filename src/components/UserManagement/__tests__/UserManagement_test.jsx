import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import UserManagement from '../UserManagement';

// import { specs, describe, it } from 'storybook-addon-specifications';

import {storiesOf, describe, it, specs
} from "../../../../.storybook/facade";

import {shallow} from 'enzyme';
import expect from 'expect';


const stories = storiesOf('UserManagement', module);

stories.add('Search Patient Story', () => {
    const userManagementStory = (
      <UserManagement/>);

    specs(() => describe('Show a successful alert', () => {
        it('Should render the UserManagement component without crashing', () => {
            let output = shallow(userManagementStory);
            expect(output.find('.user-management-block').length).toEqual(1);
        });
    }));
    return userManagementStory;
});
