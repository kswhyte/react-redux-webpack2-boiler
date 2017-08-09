import React from 'react';
import renderer from 'react-test-renderer';
import ModalWrapper from '../ModalWrapper';
import LogOutAreYouSure from '../components/logoutAreYouSure';

import {mount} from 'enzyme';

it('renders Wrapper Correctly', () => {
  const tree = renderer.create(
    <ModalWrapper>children</ModalWrapper>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Logout Modal correctly', () => {
  const tree = renderer.create(
    <LogOutAreYouSure/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Should close the modal when background is clicked', () => {
  let wrapper = mount(<ModalWrapper>Children</ModalWrapper>);
  let background = wrapper.find('.modal').simulate('click');
  expect(wrapper.find('modal').exists()).toBe(false);

})


