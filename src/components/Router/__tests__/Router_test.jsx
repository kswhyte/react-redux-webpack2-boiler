import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import Router from '../Router';

// import { specs, describe, it } from 'storybook-addon-specifications';

import {storiesOf, describe, it, specs
} from "../../../../.storybook/facade";

import {shallow} from 'enzyme';
import expect from 'expect';


const stories = storiesOf('Router', module);

stories.add('Story', () => {
    const routerStory = (
      <Router/>);

    specs(() => describe('Show a successful alert', () => {
        it('Should render the Router component without crashing', () => {
            let output = shallow(routerStory);
            expect(output.find('.body-wrapper').length).toEqual(1);
        });
    }));
    return routerStory;
});
