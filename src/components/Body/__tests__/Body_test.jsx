import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import Body from '../Body';

// import { specs, describe, it } from 'storybook-addon-specifications';

import {storiesOf, describe, it, specs
} from "../../../../.storybook/facade";

import {shallow} from 'enzyme';
import expect from 'expect';


const stories = storiesOf('Body', module);

stories.add('Story', () => {
    const bodyStory = (
      <Body/>);

    specs(() => describe('Show a successful alert', () => {
        it('Should render the Body component without crashing', () => {
            let output = shallow(bodyStory);
            expect(output.find('.body-wrapper').length).toEqual(1);
        });
    }));
    return bodyStory;
});
