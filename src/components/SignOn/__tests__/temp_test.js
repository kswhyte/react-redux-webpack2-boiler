import React from 'react';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

const stories = storiesOf('SignOn', module);


stories.add('Clicking Submit', () => {
  const props2 = {
    validationMessage: 'Please enter a valid email'
  };

  const signOnStory2 = (
    <StaticRouter context={{}}>
      <SignOn {...props2} />
    </StaticRouter>
  );

  specs(() =>
    describe('Clicking Submit', () => {
      it('Should get an error message and message asking if you would like to recover your password after your second attempt', () => {
        let output = mount(signOnStory2);
        expect(output.find('h5').text()).toContain('Please enter a valid email');
      });

      // it('Should send post with an object that contains username, password to endpoint', () => {
      //   let output = mount(signOnStory2);
      //   const userData = {
      //     loginEmail: 'newagent@mailinator.com',
      //     loginPassword: 'newpassword'
      //   };
      //   let currentRoute = window.location;
      //
      //   sessionActions.startLoginClick(userData);
      //   // TODO: think about how to best check that the data is sent through with "startLoginClick(data)"
      // });
      // it('Should display red text and red bottom border for username and password if the form was submitted without any text added to each input field', () => {
      //   let output = mount(signOnStory2);
      //   // TODO: need to add css styling for a red text and red bottom border for invalid form data
      // });
    })
  );
  return signOnStory2;
});
