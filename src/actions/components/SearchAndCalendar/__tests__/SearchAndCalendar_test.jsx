import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import SearchAndCalendar from '../SearchAndCalendar';

// import { specs, describe, it } from 'storybook-addon-specifications';

import {storiesOf, describe, it, specs
} from "../../../../.storybook/facade";

import {shallow} from 'enzyme';
import expect from 'expect';


const stories = storiesOf('SearchAndCalendar', module);

stories.add('Story', () => {
    const SearchAndCalendarStory = (
      <SearchAndCalendar/>);

    specs(() => describe('Show a successful alert', () => {
        it('Should render the SearchAndCalendar component without crashing', () => {
            let output = shallow(SearchAndCalendarStory);
            expect(output.find('.search-and-calendar-block').length).toEqual(1);
        });
    }));
    return SearchAndCalendarStory;
});
