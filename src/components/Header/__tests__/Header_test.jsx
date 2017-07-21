import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import Header from '../Header';

// import { specs, describe, it } from 'storybook-addon-specifications';

import {storiesOf, describe, it, specs
} from "../../../../.storybook/facade";

import {shallow} from 'enzyme';
import expect from 'expect';


const stories = storiesOf('Header', module);

stories.add('Story', () => {
    const headerStory = (
      <Header/>);

    specs(() => describe('Show a successful alert', () => {
        it('Should render the Header component without crashing', () => {
            let output = shallow(headerStory);
            expect(output.find('header').length).toEqual(1);
        });
    }));
    return headerStory;
});
