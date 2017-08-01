import React from 'react';
import PropTypes from 'prop-types';

import HgRow from '@hg/three-ui/HgRow';
import TextInput from '@hg/three-ui/HgInputsV2/TextInput';
import SelectInput from '@hg/three-ui/HgInputsV2/SelectInput';

import './patient-info.css';

const PatientInfo = props => {
  PatientInfo.propTypes = {
    children: PropTypes.object
  };

  const check = () => {
    console.log(props);
  };
  check();

  return (
    <div className="patient-info-wrapper">
      <div className="tab-content clearfix">
        <div className="general-info-form tab-pane active">
          <hr />
          <form>
            <HgRow>
              <div className="col-sm-3">
                <TextInput label="PATIENT FIRST NAME &#42;" placeholder="Patient First Name" />
              </div>

              <div className="col-sm-4">
                <TextInput label="PATIENT LAST NAME &#42;" placeholder="Patient Last Name" />
              </div>

              <div className="col-sm-2">
                <SelectInput
                  label="GENDER &#42;"
                  required
                  options={[{ id: 0, text: 'Male' }, { id: 1, text: 'Female' }]}
                />
              </div>

              <div className="col-sm-3">
                <TextInput label="EMAIL ADDRESS &#42;" placeholder="Email Adress" />
              </div>
            </HgRow>

            <HgRow>
              <div className="col-sm-3">
                <SelectInput label="PATIENT DATE OF BIRTH &#42;" required />
              </div>

              <div className="col-sm-2">
                <SelectInput label="PATIENT DATE OF BIRTH &#42;" required />
              </div>

              <div className="col-sm-2">
                <SelectInput label="PATIENT DATE OF BIRTH &#42;" required />
              </div>

              <div className="col-sm-2">
                <TextInput label="PHONE NUMBER &#42;" placeholder="Phone Number" />
              </div>

              <div className="col-sm-3">
                <SelectInput label="CONTACT METHOD &#42;" required />
              </div>
            </HgRow>

            <HgRow>
              <div className="col-sm-4">
                <TextInput label="STREET &#42;" required />
              </div>

              <div className="col-sm-3">
                <TextInput label="CITY STATE ZIP &#42;" required />
              </div>

              <div className="col-sm-2">
                <SelectInput label="CITY STATE ZIP &#42;" required />
              </div>

              <div className="col-sm-2">
                <TextInput label="CITY STATE ZIP &#42;" placeholder="Zip" required />
              </div>
            </HgRow>

            <HgRow>
              <div className="col-sm-4">
                <SelectInput label="PRIMARY INSURANCE CARRIER &#42;" required />
              </div>

              <div className="col-sm-2">
                <SelectInput label="PLAN TYPE &#42;" required />
              </div>

              <div className="col-sm-3">
                <TextInput label="PLAN NO. &#42;" placeholder="Plan Number" required />
              </div>
            </HgRow>

            <HgRow>
              <div className="col-sm-4">
                <SelectInput label="ALTERNATIVE INSURANCE CARRIER &#42;" required />
              </div>

              <div className="col-sm-2">
                <SelectInput label="PLAN TYPE &#42;" required />
              </div>

              <div className="col-sm-3">
                <TextInput label="PLAN NO. &#42;" placeholder="Plan Number" required />
              </div>
            </HgRow>

            <HgRow>
              <div className="col-sm-4">
                <SelectInput label="REFERRING PHYSICIAN &#42;" required />
              </div>
            </HgRow>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
