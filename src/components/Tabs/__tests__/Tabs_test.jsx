import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import Tabs from '../Tabs';

// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { shallow } from 'enzyme';
import expect from 'expect';

const stories = storiesOf('Tabs', module);

stories.add('Story', () => {
  const tabsStory = <Tabs />;

  specs(() =>
    describe('Show a successful alert', () => {
      it('Should render the Tabs component without crashing', () => {
        let output = shallow(tabsStory);
        expect(output.find('.tab-wrapper').length).toEqual(1);
      });
    })
  );
  return tabsStory;
});
