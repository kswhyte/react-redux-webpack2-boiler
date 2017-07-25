import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import NotFound from '../NotFound';

// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { StaticRouter } from 'react-router';

import { mount } from 'enzyme';
import expect from 'expect';

const context = {};

const stories = storiesOf('NotFound', module);

stories.add('Story', () => {
  const notFoundStory = (
    <StaticRouter context={context}>
      <NotFound />
    </StaticRouter>
  );

  specs(() =>
    describe('Show NotFound', () => {
      it('Should render the NotFound component without crashing', () => {
        let output = mount(notFoundStory);
        expect(output.find('.not-found-wrapper').length).toEqual(1);
      });
    })
  );
  return notFoundStory;
});
