import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import SignOn from '../SignOn';

// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { shallow } from 'enzyme';
import expect from 'expect';

const stories = storiesOf('SignOn', module);

stories.add('Search Patient Story', () => {
  const signOnStory = <SignOn />;
  specs(() =>
    describe('Show a successful alert', () => {
      it('Should render the SignOn component without crashing', () => {
        let output = shallow(signOnStory);
        expect(output.find('.sign-on-wrapper').length).toEqual(1);
      });
    })
  );
  return signOnStory;
});

stories.add('SignOn Page', () => {
const signOnHeader=<SignOn />;
specs(()=>
describe('Show a successful header',()=>{
it('Should contain the signon h2 header tag',()=>{

  let output=shallow(signOnHeader);
          expect(output.find('h2').first().text()).toContain('SIGN ON');
});
})
);
 return signOnHeader;
});
