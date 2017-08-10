import React from 'react';
import renderer from 'react-test-renderer';
import ModalWrapper from '../ModalWrapper';
import LogOutAreYouSure from '../components/logoutAreYouSure';

import {storiesOf, describe, it, specs
} from "../../../../.storybook/facade";

import expect from 'expect';

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

