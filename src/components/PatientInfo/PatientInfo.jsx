/*eslint no-unused-vars: */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
// import isEmail from '../../helpers/isEmail';

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
      dobMonth: '',
      dobDay: '',
      dobYear: '',
      phoneNumber: '',
      phoneType: '',
      contactMethod: '',
      street: '',
      city: '',
      state: '',
      zip: '',
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
    return (
      <div className="patient-info-wrapper">
        <div className="tab-content clearfix">
          <div className="general-info-form tab-pane active">
            <form>
              {/* Row1 */}
              <div className="row xs-spacer">
                <div className="col-sm-3 no-margin padding-10">
                  <label>PATIENT FIRST NAME &#42;</label>
                  <input
                    className="form-group"
                    type="text"
                    value={this.props.generalInfo.firstName ? this.props.generalInfo.firstName : this.state.firstName}
                    placeholder="Patient First Name"
                    onChange={e => this.setState({ firstName: e.target.value })}
                    required
                  />
                </div>

                <div className="col-sm-3 no-margin padding-10">
                  <label>PATIENT LAST NAME &#42;</label>
                  <input
                    className="form-group"
                    type="text"
                    value={this.props.generalInfo.lastName ? this.props.generalInfo.lastName : this.state.lastName}
                    placeholder="Patient Last Name"
                    onChange={e => this.setState({ lastName: e.target.value })}
                    required
                  />
                </div>

                <div className="col-sm-2 no-margin padding-10">
                  <label>GENDER &#42;</label>
                  <select
                    className="select-dropdown"
                    onChange={e => this.setState({ gender: e.target.value })}
                    required
                  >
                    <option value="select" selected>
                      Select
                    </option>
                  </select>
                </div>

                <div className="col-sm-4 no-margin padding-10">
                  <label>EMAIL ADDRESS &#42;</label>
                  <input
                    className="form-group"
                    type="text"
                    value={
                      this.props.generalInfo.emailAddress
                        ? this.props.generalInfo.emailAddress
                        : this.state.emailAddress
                    }
                    placeholder="Email Address"
                    onChange={e => this.setState({ emailAddress: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Row2 */}
              <div className="row xs-spacer">
                <div className="col-sm-2 no-margin padding-10">
                  <label>PATIENT DATE OF BIRTH &#42;</label>
                  <select className="select-dropdown" onChange={e => this.setState({ dobMonth: e.target.value })}>
                    <option value="select" selected>
                      Select
                    </option>
                  </select>
                </div>

                <div className="col-sm-1 no-margin padding-10">
                  <label />
                  <select
                    className="select-dropdown dropdown-affiliate"
                    onChange={e => this.setState({ dobDay: e.target.value })}
                  >
                    <option value="select" selected>
                      Select
                    </option>
                  </select>
                </div>

                <div className="col-sm-1 no-margin padding-10">
                  <label />
                  <select
                    className="select-dropdown dropdown-affiliate"
                    onChange={e => this.setState({ dobYear: e.target.value })}
                  >
                    <option value="select" selected>
                      Select
                    </option>
                  </select>
                </div>

                <div className="col-sm-3 no-margin padding-10">
                  <label>PHONE NUMBER &#42;</label>
                  <input
                    className="form-group"
                    type="text"
                    value={
                      this.props.generalInfo.homePhoneNumber
                        ? this.props.generalInfo.homePhoneNumber
                        : this.state.phoneNumber
                    }
                    placeholder="Phone Number"
                    onChange={e => this.setState({ phoneNumber: e.target.value })}
                    required
                  />
                </div>

                <div className="col-sm-2 no-margin padding-10">
                  <label>PHONE TYPE &#42;</label>
                  <select className="select-dropdown" onChange={e => this.setState({ phoneType: e.target.value })}>
                    <option value="select" selected>
                      Select
                    </option>
                  </select>
                </div>

                <div className="col-sm-3 no-margin padding-10">
                  <label>CONTACT METHOD &#42;</label>
                  <select className="select-dropdown" onChange={e => this.setState({ contactMethod: e.target.value })}>
                    <option value="select" selected>
                      Select
                    </option>
                  </select>
                </div>
              </div>

              {/* Row3 */}
              <div className="row xs-spacer">
                <div className="col-sm-4 no-margin padding-10">
                  <label>STREET &#42;</label>
                  <input
                    className="form-group"
                    type="text"
                    onChange={e => this.setState({ street: e.target.value })}
                    required
                  />
                </div>

                <div className="col-sm-2 no-margin padding-10">
                  <label>CITY STATE ZIP &#42;</label>
                  <input
                    className="form-group"
                    type="text"
                    placeholder="City"
                    onChange={e => this.setState({ city: e.target.value })}
                    required
                  />
                </div>
                <div className="col-sm-1 no-margin padding-10">
                  <label />
                  <select
                    className="select-dropdown dropdown-affiliate"
                    onChange={e => this.setState({ state: e.target.value })}
                  >
                    <option value="select" selected>
                      Select
                    </option>
                  </select>
                </div>

                <div className="col-sm-2 no-margin padding-10">
                  <label />
                  <input
                    className="form-group input-affiliate"
                    type="text"
                    placeholder="Zip"
                    onChange={e => this.setState({ zipCode: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Row4 */}
              <div className="row xs-spacer">
                <div className="col-sm-4">
                  <label>PRIMARY INSURANCE CARRIER &#42;</label>
                  <select
                    className="select-dropdown"
                    onChange={e => this.setState({ insuranceCarrierPrimary: e.target.value })}
                    required
                  >
                    <option value="select" selected>
                      Select
                    </option>
                  </select>
                </div>

                <div className="col-sm-2 no-margin padding-10">
                  <label>PLAN TYPE &#42;</label>
                  <select
                    className="select-dropdown"
                    onChange={e => this.setState({ planTypePrimary: e.target.value })}
                  >
                    <option value="select" selected>
                      Select
                    </option>
                  </select>
                </div>

                <div className="col-sm-3 no-margin padding-10">
                  <label>PLAN NO. &#42;</label>
                  <input placeholder="Plan Number" className="form-group" type="text" required />
                </div>
              </div>

              {/* Row5 */}
              <div className="row xs-spacer">
                <div className="col-sm-4">
                  <label>ALTERNATE INSURANCE CARRIER &#42;</label>
                  <select
                    className="select-dropdown"
                    onChange={e => this.setState({ insuranceCarrierAlternate: e.target.value })}
                    required
                  >
                    <option value="select" selected>
                      Select
                    </option>
                  </select>
                </div>

                <div className="col-sm-2 no-margin padding-10">
                  <label>PLAN TYPE &#42;</label>
                  <select
                    className="select-dropdown"
                    onChange={e => this.setState({ planTypeAlternate: e.target.value })}
                  >
                    <option value="ppo" selected>
                      PPO
                    </option>
                  </select>
                </div>

                <div className="col-sm-3 no-margin padding-10">
                  <label>PLAN NO. &#42;</label>
                  <input
                    className="form-group"
                    type="text"
                    placeholder="Plan Number"
                    onChange={e => this.setState({ planTypeAlternate: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Row6 */}
              <div className="row xs-spacer">
                <div className="col-sm-4">
                  <label>REFERRING PHYSICIAN &#42;</label>
                  <select
                    className="select-dropdown"
                    onChange={e => this.setState({ referringPhysician: e.target.value })}
                  >
                    <option value="select" selected>
                      Select
                    </option>
                  </select>
                </div>
              </div>

              <div className="row xs-spacer">
                <div className="break-line" />
              </div>

              {/* Buttons */}
              <div className="row xs-spacer">
                <div className="col-sm-6 no-padding">
                  <button className="back-btn" tabIndex={1}>
                    BACK
                  </button>
                </div>

                <div className="col-sm-6 no-padding">
                  <button className="next-btn" type="submit" tabIndex={1}>
                    NEXT
                  </button>
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
