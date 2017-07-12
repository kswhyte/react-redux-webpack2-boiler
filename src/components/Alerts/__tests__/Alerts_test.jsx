import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Alerts from '../Alerts';

import { specs, describe, it } from 'storybook-addon-specifications';

import {mount, shallow} from 'enzyme';
import expect from 'expect';

const successAlert = {
    alertType: 'success',
    message: 'This worked!'
};

const infoAlert = {
    alertType: 'info',
    message: 'Informational Alert!'
};

const warningAlert = {
    alertType: 'warning',
    message: 'Be warned!'
};

const dangerAlert = {
    alertType: 'danger',
    message: 'Something went wrong!'
};


const stories = storiesOf('Alerts', module);

stories.add('Success Alert Options Story', () => {
    const alertsStory = (<Alerts
        {...successAlert}
      />);
    specs(() => describe('Show a successful alert', () => {
        it('Should show a success alert and be green', () => {
            let output = shallow(alertsStory);
            expect(output.find('.alert-success').length).toEqual(1);
        });
    }));
    return alertsStory;
});


stories.add('Info Alert Options Story', () => {
    const alertsStory = (<Alerts
        {...infoAlert}
      />);
    specs(() => describe('Show a info alert', () => {
        it('Should show an info alert and be blue', () => {
            let output = shallow(alertsStory);
            expect(output.find('.alert-info').length).toEqual(1);
        });
    }));
    return alertsStory;
});


stories.add('Warning Alert Options Story', () => {
    const alertsStory = (<Alerts
        {...warningAlert}
      />);
    specs(() => describe('Show a warning alert', () => {
        it('Should show a warning message and be orange', () => {
            let output = shallow(alertsStory);
            expect(output.find('.alert-warning').length).toEqual(1);
        });
    }));
    return alertsStory;
});


stories.add('Danger Alert Options Story', () => {
    const alertsStory = (<Alerts
        {...dangerAlert}
      />);
    specs(() => describe('Show a danger alert', () => {
        it('Should show a danger alert and be red', () => {
            let output = shallow(alertsStory);
            expect(output.find('.alert-danger').length).toEqual(1);
        });
    }));
    return alertsStory;
});