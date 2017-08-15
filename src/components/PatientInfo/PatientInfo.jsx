import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
//import Moment from 'moment';
 //import isEmail from '../../helpers/isEmail';
 import {days,years} from '../../helpers/dateOptions';
 import states from '../../helpers/states';
 import gender from '../../helpers/genderOptions';
 import phoneType from '../../helpers/phoneTypeOptions';


import './patient-info.css';

const propTypes = {
  children: PropTypes.object,
  generalInfo: PropTypes.object,
  submitPatientInfo:PropTypes.func
};


class PatientInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patientId:'',
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
      stateCode: '',
      zipCode: '',
      insuranceCarrier: '',
      planType: '',
      planNumber: '',
      insuranceCarrierAlternate: '',
      planTypeAlternate: '',
      planNumberAlternate: '',
      referringPhysician: '',
      status:''
    };

    this.mapOptions = this.mapOptions.bind(this);
  }

  componentWillUpdate() {
    this.setState({
      patientId:'',
      firstName: this.props.generalInfo.firstName? this.props.generalInfo.firstName: '',
      lastName: this.props.generalInfo.lastName? this.props.generalInfo.lastName: '',
      gender: this.props.generalInfo.gender? this.props.generalInfo.gender: '',
      emailAddress: this.props.generalInfo.emailAddress? this.props.generalInfo.emailAddress: '',
      dobMonth: this.props.generalInfo.dobMonth? this.props.generalInfo.dobMonth: '',
      dobDay: this.props.generalInfo.dobDay? this.props.generalInfo.dobDay: '',
      dobYear: this.props.generalInfo.dobYear? this.props.generalInfo.dobYear: '',
      phoneNumber: this.props.generalInfo.phoneNumber? this.props.generalInfo.phoneNumber: '',
      phoneType: this.props.generalInfo.phoneType? this.props.generalInfo.phoneType: '',
      contactMethod: this.props.generalInfo.contactMethod? this.props.generalInfo.contactMethod: '',
      street: this.props.generalInfo.street? this.props.generalInfo.street: '',
      city: this.props.generalInfo.city? this.props.generalInfo.city: '',
      stateCode: this.props.generalInfo.stateCode? this.props.generalInfo.stateCode: '',
      zipCode: this.props.generalInfo.zipCode? this.props.generalInfo.zipCode: '',
      insuranceCarrier: this.props.generalInfo.insuranceCarrier? this.props.generalInfo.insuranceCarrier: '',
      planType: this.props.generalInfo.planType? this.props.generalInfo.planType: '',
      planNumber: this.props.generalInfo.planNumber? this.props.generalInfo.planNumber: '',
      insuranceCarrierAlternate: '',
      planTypeAlternate: '',
      planNumberAlternate: '',
      referringPhysician: '',
      status:this.props.generalInfo.status?this.props.generalInfo.status:''
    });
  }
  componentDidMount() {}


mapOptions(options){
    { return options.map(option => (
                <option value={option.id} key={option.id} label={option.text}>
                  {option.text}
                </option>
              ))}
    }

  render() {
    return (
      <div className="patient-info-wrapper">
        <div className="tab-content clearfix">
          <div className="general-info-form tab-pane active">

            <form onSubmit={e=>{
              e.preventDefault();
              this.props.submitPatientInfo(this.state);
              this.setState({status:'success'})
            }
            }>

              {/* Row1 */}
              <div className="row xs-spacer">
                <div className="col-sm-3 no-margin padding-10">
                  <label>PATIENT FIRST NAME &#42;</label>
                  <input
                    className="form-group"
                    type="text"
                    value={this.state.firstName}
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
                    value={this.state.lastName}
                    placeholder="Patient Last Name"
                    onChange={e => this.setState({ lastName: e.target.value })}
                    required
                  />
                </div>

                <div className="col-sm-2 no-margin padding-10">
                  <label>GENDER &#42;</label>
                  <select
                    className="select-dropdown form-control"
                    onChange={e => this.setState({ gender: e.target.value })}
                   required
                  >
                  {this.mapOptions(gender)}
                  </select>
                </div>
                <div className="col-sm-4 no-margin padding-10">
                  <label>EMAIL ADDRESS &#42;</label>
                  <input
                    className="form-group"
                    type="email"
                    value={
                       this.state.emailAddress
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
                  <select className="select-dropdown form-control" onChange={e => this.setState({ dobMonth: e.target.value })}>
                    <option value="select" selected>
                      Select
                    </option>
                  </select>
                </div>

                <div className="col-sm-1 no-margin padding-10">
                  <label />
                  <select
                    className="select-dropdown dropdown-affiliate form-control"
                    onChange={e => this.setState({ dobDay: e.target.value })}

                    value={
                       this.state.dobDay
                    }>

                   {this.mapOptions(days)}
                  </select>
                </div>

                <div className="col-sm-1 no-margin padding-10">
                  <label />
                  <select
                    className="select-dropdown dropdown-affiliate form-control"
                    onChange={e => this.setState({ dobYear: e.target.value })}

                    value={
                       this.state.dobYear
                    }>
                    {this.mapOptions(years)}
                  </select>
                </div>

                <div className="col-sm-3 no-margin padding-10">
                  <label>PHONE NUMBER &#42;</label>
                  <input
                    className="form-group"
                    type="text"
                    value={
                       this.state.phoneNumber
                    }
                    pattern="[0-9]{10}"
                    placeholder="Phone Number"
                    onChange={e => this.setState({ phoneNumber: e.target.value })}
                    required
                  />
                </div>

                <div className="col-sm-2 no-margin padding-10">
                  <label>PHONE TYPE &#42;</label>
                  <select className="select-dropdown form-control" onChange={e => this.setState({ phoneType: e.target.value })}
                     value={
                       this.state.phoneType
                    }>
                   {this.mapOptions(phoneType)}

                  </select>
                </div>

                <div className="col-sm-3 no-margin padding-10">
                  <label>CONTACT METHOD &#42;</label>
                  <select className="select-dropdown form-control" onChange={e => this.setState({ contactMethod: e.target.value })}
                    value={
                      this.state.contactMethod}>
                    <option value="select" selected>
                      SMS
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
                  value={
                      this.state.street}
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
                    value={
                      this.state.city}

                  />
                </div>
                <div className="col-sm-1 no-margin padding-10">
                  <label />
                  <select
                    className="select-dropdown dropdown-affiliate form-control"
                    onChange={e => this.setState({ stateCode: e.target.value })}
                    value={
                      this.state.stateCode}
                  >
                   {this.mapOptions(states)}
                  </select>
                </div>

                <div className="col-sm-2 no-margin padding-10">
                  <label />
                  <input
                    className="form-group input-affiliate"
                    type="text"
                    pattern="[0-9]{5}"
                    placeholder="Zip"
                    onChange={e => this.setState({ zipCode: e.target.value })}
                    value={
                      this.state.zipCode}
                    required
                    /* onInvalid="setCustomValidity('Please fill out Zip Code correclty')"*/
                  />
                </div>
              </div>
              {/* Row4 */}
              <div className="row xs-spacer">
                <div className="col-sm-4">
                  <label>PRIMARY INSURANCE CARRIER &#42;</label>
                  <select
                    className="select-dropdown form-control"
                    onChange={e => this.setState({ insuranceCarrier: e.target.value })}
                      value={
                      this.state.insuranceCarrier}
                  >
                    <option value="select" selected>
                      default
                    </option>
                    required
                  </select>
                </div>

                <div className="col-sm-2 no-margin padding-10">
                  <label>PLAN TYPE &#42;</label>
                  <select
                    className="select-dropdown form-control"
                    onChange={e => this.setState({ planType: e.target.value })}
                  >
                    <option value="select" selected>
                      dflt
                    </option>
                  </select>
                </div>

                <div className="col-sm-3 no-margin padding-10">
                  <label>PLAN NO. &#42;</label>
                  <input
                  placeholder="Plan Number"
                  type="text"
                  className="form-group"
                  onChange={e => this.setState({ planNumber: e.target.value })}
                  value={this.state.planNumber}
                  required />
                </div>
              </div>

              {/* Row5 */}
              <div className="row sm-spacer">
                <div className="col-sm-4">
                  <label>ALTERNATE INSURANCE CARRIER</label>
                  <select
                    className="select-dropdown form-control"
                    onChange={e => this.setState({ insuranceCarrierAlternate: e.target.value })}

                  >
                    <option value="select" selected>
                      Select
                    </option>
                  </select>
                </div>
                <div className="col-sm-2 no-margin padding-10">
                  <label>PLAN TYPE &#42;</label>
                  <select
                    className="select-dropdown form-control"
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
                    onChange={e => this.setState({ planNumberAlternate: e.target.value })}
                    value={this.state.planNumberAlternate}
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
              <div className="row sm-spacer">
                <div className="col-sm-5">
                  <div>
                    {this.state.status==='success' &&
                        <div className="alerts">
                          <div className={`alert alert-success`} role="alert">
                              Patient Details Saved Successfully!<a onClick={()=>{this.setState({status:''}) }} className="close" aria-label="close">&times;</a>
                          </div>
                        </div>
                    }
                  </div>
                </div>
              </div>
              <div className="row sm-spacer">
                <div className="col-xs-offset-3 col-xs-6">
                  <button onClick={this.props.submitPatientInfo} className="primary">SAVE</button>
                </div>
              </div>
              <div className="row sm-spacer">
                <div className="break-line"></div>
              </div>

            {/* Buttons */}
              <div className="row xs-spacer sm-spacer">
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
