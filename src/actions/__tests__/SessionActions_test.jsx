import actions from '../SessionActions';
import expect from 'expect';

import {describe, it} from "../../../.storybook/facade";

describe('Session Actions', () => {
    describe('Cacel Action', () => {
        it('Should start a session successfully', () => {

            //Arrange
            const data = {
                "Acknowledge":"Success",
                "StatusCode":1,
                "MessageTitle":"Start Session",
                "MessageBody":"Session started successfull (guid)",
                "Data":null
            };

            let expectedAction = {
                type: 'START_SUCCESS',
                data
            };

            //Act
            const action = actions.startSessionSuccess(data);

            //Assert
            expect(action).toEqual(expectedAction)

        }),

        it('Should create an ERROR on start session', () => {
            //Arrange
            const err = `500 : Error on Start Session`;

            let expectedAction = {
                type: 'START_FAIL',
                err
            };

            //Act
            const action = actions.startSessionFail(err);

            //Assert
            expect(action).toEqual(expectedAction)
        })

        it('Should create an ERROR on start session', () => {
            //Arrange
            const err = `500 : Timeout`;

            let expectedAction = {
                type: 'START_TIMEOUT',
                err
            };

            //Act
            const action = actions.startSessionTimeout(err);

            //Assert
            expect(action).toEqual(expectedAction)
        })
    })
});