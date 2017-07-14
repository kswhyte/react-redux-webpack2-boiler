import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from '../Welcome';

// import { specs, describe, it } from 'storybook-addon-specifications';

import {storiesOf, describe, it, specs
} from "../../../../.storybook/facade";

import {shallow} from 'enzyme';
import expect from 'expect';

const startProps = {

}


const stories = storiesOf('Welcome', module);

stories.add('Welcome page main story', () => {
    const welcomeStory = (<Welcome />);
    specs(() => describe('Show a successful alert', () => {
        it('Should show up', () => {
            let output = shallow(welcomeStory);
            expect(output.find('.start-call-banner-block').length).toEqual(1);
        });
    }));
    return welcomeStory;
});

