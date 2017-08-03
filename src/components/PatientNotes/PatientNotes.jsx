import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

const PatientNotes = props => {
  PatientNotes.propTypes = {
    children: PropTypes.object
  };

  const check = () => {
    console.log(props);
  };
  check();

  // const existingNotes = props.appointments.filter(note => {
  //   return Moment(note.noteDateTime) < Moment();
  // });

  return (
    <div className="patient-notes-wrapper">
      <div className="tab-content clearfix">
        <div className="patient-notes-form tab-pane active">
          <table className="notes-tables header-table">
            <th>Date</th>
            <th>Time</th>
            <th>Title</th>
            <th>Actions</th>
          </table>
          {/* {existingNotes.length > 0 && <ExistingNotes existingNotes={existingNotes} />} */}
        </div>
      </div>
    </div>
  );
};

//TODO: make sure data is coming in for each note. UNCOMMENT when Redux wiring is setup
// const ExistingNotes = props => {
//   ExistingNotes.propTypes = {
//     existingNotes: PropTypes.array.required
//   };
//   return (
//     <table className="notes-tables">
//       {props.existingNotes.map(note => {
//         return (
//           <tr key={note.noteID}>
//             <td>
//               {Moment(note.noteDateTime).format('LL')}
//             </td>
//             <td>
//               {Moment(note.noteTitle).format('LT')}
//             </td>
//           </tr>
//         );
//       })}
//     </table>
//   );
// };

export default PatientNotes;
