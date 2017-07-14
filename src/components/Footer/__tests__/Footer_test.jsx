import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import Footer from '../Footer';

// import { specs, describe, it } from 'storybook-addon-specifications';

import {storiesOf, describe, it, specs
} from "../../../../.storybook/facade";

import {shallow} from 'enzyme';
import expect from 'expect';


const stories = storiesOf('Footer', module);

stories.add('Story', () => {
    const footerStory = (
      <Footer/>);

    specs(() => describe('Show a successful alert', () => {
        it('Should render the Footer component without crashing', () => {
            let output = shallow(footerStory);
            expect(output.find('.footer-wrapper').length).toEqual(1);
        });
    }));
    return footerStory;
});
