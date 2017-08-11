import React from 'react';
import PatientInfo from '../PatientInfo';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import { shallow } from 'enzyme';
import expect from 'expect';

const stories = storiesOf('PatientInfo', module);

stories.add('Patient Info Story', () => {
  const props = {
    generalInfo : {firstName: "test"}
  }
  const patientInfoStory = <PatientInfo {...props} />;

  specs(() =>
    describe('Show a successful alert', () => {
      it('Should render the PatientInfo component without crashing', () => {
        let output = shallow(patientInfoStory);
        expect(output.find('.patient-info-wrapper').length).toEqual(1);
      });
      // it('Should have a header element that says "Sign On"', () => {
      //   let output = mount(signOnStory);
      //   expect(output.find('h2').text()).toContain('SIGN ON');
      // });
      //
      // it('Should have a <p> tag that says "please enter your email address and password below"', () => {
      //   let output = mount(signOnStory);
      //   expect(output.find('p').text()).toContain('Please enter your email address and password below');
      // });
      //
      // it('Should have three input form fields', () => {
      //   let output = mount(signOnStory);
      //   expect(output.find('input').length).toEqual(3);
      // });
      //
      // it('Should have two input form fields: username/email and password', () => {
      //   let output = mount(signOnStory);
      //   expect(output.find('#loginEmail').length).toEqual(1);
      //   expect(output.find('#loginPassword').length).toEqual(1);
      // });
      //
      // it('Should have one call-to-action submit button', () => {
      //   let output = mount(signOnStory);
      //   expect(output.find('button').length).toEqual(1);
      // });
      //
      // it('Should have one link: "Forgot Password"', () => {
      //   let output = mount(signOnStory);
      //   expect(output.find('a').length).toEqual(1);
      //   expect(output.find('a').text()).toContain('Forgot your password?');
      // });
      //
      // it('Should display an animation alerting user, "Forgot Password" after 2 login attempts', () => {
      //   let output = mount(signOnStory);
      //   output.find('#loginEmail').text('s');
      //   output.find('#loginPassword').text('d');
      //   output.setState({loginAttempts: 1})
      //   expect(output.find('.attention-animation').length).toEqual(0)
      //
      //   output.find('[type="submit"]').simulate('click');
      //   output.find('[type="submit"]').simulate('click');
      //
      //   console.log(output.state());
      //   expect(output.find('.attention-animation').length).toEqual(1)
      // });
    })
  );
  return patientInfoStory;
});
