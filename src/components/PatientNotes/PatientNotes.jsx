import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import './patient-notes.css';

const PatientNotes = props => {
  PatientNotes.propTypes = {
    children: PropTypes.object,
    notes: PropTypes.array.required
  };

  const check = () => {
    console.log(props);
  };
  check();

  return (
    <div className="patient-notes-wrapper">
      <div className="tab-content clearfix">
        <div className="patient-notes-form tab-pane active">
          {
            (props.notes.length === 0) && (
              <div className="page-instructions">
                <p>No notes description</p>
              </div>
            )
          }
          <table className="notes-tables header-table">
            <thead>
              <th>Date</th>
              <th>Time</th>
              <th>Title</th>
              <th>Actions</th>
            </thead>
      <tbody>
      {
        props.notes.map(note => {
          return (
            <tr key={note.noteId} >
              <td>{Moment(note.dateTime).format('LL')}</td>
              <td>{Moment(note.dateTime).format('LT')}</td>
              <td>{note.description}</td>
              <td></td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
        </div>
      </div>
    </div>
  );
};


PatientNotes.defaultProps = {
  notes: []
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



