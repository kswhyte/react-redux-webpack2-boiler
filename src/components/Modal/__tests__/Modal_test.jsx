/*
This file does not need expect.
jest has expect built in.
These test are not for storybook : we can talk about that

*/

/*
Note from Danny - I set this up for storybook because it was breaking.
We could alternatively rename this file so that storybook vs jest test are different
*/

import React from 'react';

import { storiesOf, describe, it, specs } from '../../../../.storybook/facade';

import renderer from 'react-test-renderer';
import ModalWrapper from '../ModalWrapper';
import LogOutAreYouSure from '../components/logoutAreYouSure';

import {mount} from 'enzyme';


const stories = storiesOf('ModalWrapper', module);

stories.add('Modal Story', () => {
    const modalStory = <ModalWrapper>children</ModalWrapper>;
    specs(() =>
    describe('Show NotFound', () => {
        it('Should render the NotFound component without crashing', () => {
            let output = mount(modalStory);
            expect(output.find('.modal-dialog').length).toEqual(1);
          });
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
    }))
    return modalStory;
});





