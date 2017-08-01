import React from 'react';
import PropTypes from 'prop-types';

import HgRow from '@hg/three-ui/HgRow';
import SelectInput from '@hg/three-ui/HgInputsV2/SelectInput';
// import TextInput from '@hg/three-ui/HgInputsV2/TextInput';
// import MaskedTextInput from '../ExtraFormElements/maskedInputs';
// import HgButton from '@hg/three-ui/HgButton';

const PatientAppointments = props => {
  PatientAppointments.propTypes = {
    children: PropTypes.object
  };

  const check = () => {
    console.log(props);
  };
  check();

  return (
    <div className="patient-appointments-wrapper">
      <div className="tab-content clearfix">
        <div className="patient-appointments-form tab-pane active">
          <form>
            <HgRow>
              <div className="col-sm-2">
                <SelectInput label="Date" />
              </div>
              <div className="col-sm-1">
                <div label="Time" />
              </div>
            </HgRow>
            <div className="line" />
            <h3>CREATE NEW APPOINTMENT</h3>

            <h3>PAST APPOINTMENTS</h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PatientAppointments;
