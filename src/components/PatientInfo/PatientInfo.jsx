/*eslint no-unused-vars: */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
// import isEmail from '../../helpers/isEmail';

import SelectInput from '@hg/three-ui/HgInputsV2/SelectInput';

import './patient-info.css';

const propTypes = {
  children: PropTypes.object,
  generalInfo: PropTypes.object.required
};

class PatientInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
      emailAddress: '',
      dob: '',
      phoneNumber: '',
      phoneType: '',
      contactMethod: '',
      street: '',
      cityStateZip: '',
      insuranceCarrierPrimary: '',
      planTypePrimary: '',
      planNumberPrimary: '',
      insuranceCarrierAlternate: '',
      planTypeAlternate: '',
      planNumberAlternate: '',
      referringPhysician: ''
    };
  }

  componentDidMount() {}

  render() {
    console.log('----state', this.state);
    console.log('----props', this.props);
    return (
      <div className="patient-info-wrapper">
        <div className="tab-content clearfix">
          <div className="general-info-form tab-pane active">
            <form>
              <div className="row md-spacer">
                <div className="col-sm-3 input-row no-margin no-padding">
                  <label>PATIENT FIRST NAME &#42;</label>
                  <input
                    className="form-group"
                    type="text"
                    value={this.props.generalInfo.firstName ? this.props.generalInfo.firstName : this.state.firstName}
                    onChange={e =>
                      this.setState({
                        firstName: e.target.value
                      })}
                    placeholder="Patient First Name"
                    required
                  />
                </div>

                <div className="col-sm-3">
                  <label>PATIENT LAST NAME &#42;</label>
                  <input
                    className="form-group"
                    type="text"
                    value={this.props.generalInfo.lastName ? this.props.generalInfo.lastName : this.state.lastName}
                    onChange={e =>
                      this.setState({
                        lastName: e.target.value
                      })}
                    placeholder="Patient Last Name"
                    required
                  />
                </div>

                <div className="col-sm-2">
                  <SelectInput
                    label="GENDER &#42;"
                    required
                    options={[{ id: 0, text: 'Male' }, { id: 1, text: 'Female' }]}
                  />
                </div>

                <div className="col-sm-4">
                  <label>EMAIL ADDRESS &#42;</label>
                  <input
                    className="form-group"
                    type="text"
                    value={
                      this.props.generalInfo.emailAddress
                        ? this.props.generalInfo.emailAddress
                        : this.state.emailAddress
                    }
                    onChange={e =>
                      this.setState({
                        emailAddress: e.target.value
                      })}
                    placeholder="Email Adress"
                    required
                  />
                </div>
              </div>

              <div className="row md-spacer">
                <div className="col-sm-3">
                  <SelectInput
                    value={this.props.generalInfo.dob ? this.props.generalInfo.dob : this.state.dob}
                    label="PATIENT DATE OF BIRTH &#42;"
                  />
                </div>

                <div className="col-sm-2">
                  <SelectInput label="PATIENT DATE OF BIRTH &#42;" />
                </div>

                <div className="col-sm-2">
                  <SelectInput label="PATIENT DATE OF BIRTH &#42;" />
                </div>

                <div className="col-sm-2">
                  <label>PHONE NUMBER &#42;</label>
                  <input
                    className="form-group"
                    type="text"
                    required
                    value={
                      this.props.generalInfo.homePhoneNumber ? this.props.generalInfo.firstName : this.state.firstName
                    }
                    placeholder="Phone Number"
                  />
                </div>

                <div className="col-sm-3">
                  <SelectInput label="CONTACT METHOD &#42;" />
                </div>
              </div>

              <div className="row md-spacer">
                <div className="col-sm-4">
                  <input label="STREET &#42;" className="form-group" type="text" required />
                </div>

                <div className="col-sm-3">
                  <input label="CITY STATE ZIP &#42;" className="form-group" type="text" required />
                </div>

                <div className="col-sm-2">
                  <SelectInput label="CITY STATE ZIP &#42;" />
                </div>

                <div className="col-sm-2">
                  <input label="CITY STATE ZIP &#42;" placeholder="Zip" className="form-group" type="text" required />
                </div>
              </div>

              <div className="row md-spacer">
                <div className="col-sm-4">
                  <SelectInput label="PRIMARY INSURANCE CARRIER &#42;" />
                </div>

                <div className="col-sm-2">
                  <SelectInput label="PLAN TYPE &#42;" />
                </div>

                <div className="col-sm-3">
                  <input label="PLAN NO. &#42;" placeholder="Plan Number" className="form-group" type="text" required />
                </div>
              </div>

              <div className="row md-spacer">
                <div className="col-sm-4">
                  <SelectInput label="ALTERNATIVE INSURANCE CARRIER &#42;" />
                </div>

                <div className="col-sm-2">
                  <SelectInput label="PLAN TYPE &#42;" />
                </div>

                <div className="col-sm-3">
                  <input label="PLAN NO. &#42;" placeholder="Plan Number" className="form-group" type="text" required />
                </div>
              </div>

              <div className="row md-spacer">
                <div className="col-sm-4">
                  <SelectInput label="REFERRING PHYSICIAN &#42;" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

PatientInfo.propTypes = propTypes;

export default PatientInfo;
