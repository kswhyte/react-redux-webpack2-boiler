import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import Confirm from '../Confirm';

// import { specs, describe, it } from 'storybook-addon-specifications';

import {storiesOf, describe, it, specs
} from "../../../../.storybook/facade";

import {shallow} from 'enzyme';
import expect from 'expect';


const stories = storiesOf('Confirm', module);

stories.add('Story', () => {
    const confirm = (
      <Confirm/>);

    specs(() => describe('Show a successful alert', () => {
        it('Should render the Confirm component without crashing', () => {
            let output = shallow(confirm);
            expect(output.find('.confirmPatientInfo-wrapper').length).toEqual(1);
        });
    }));
    return confirm;
});
