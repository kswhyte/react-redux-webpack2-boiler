import * as types from '../constants/actionTypes';

//inital state is set inside the store/initialState.es6
const patientInfoReducer = (store = {}, action) => {
  switch (action.type) {
    case types.GET_PATIENT_INFO_SUCCESS: {
      return Object.assign({}, store, {generalInfo: action.data.generalInfo, appointments: action.data.appointments, notes: action.data.notes});
    }
    case types.SAVE_PATIENT_INFO_SUCCESS: {
      let savedPatient = Object.assign({},action.data,{status:'success'});
      return {...store,patientInfo:{...store.patientInfo,generalInfo:savedPatient}};
    }
    case types.SEARCH_PATIENT_SUCCESS: {
      return {...store, showResults: true, noResults: false, validationError: null, patientSearchResults: action.data };
    }
    case types.SEARCH_PATIENT_FAIL: {
      return {...store, showResults: false, noResults: true, validationError: null};
    }
    case types.SEARCH_VALIDATION_ERROR: {
      return {...store, validationError: action.err}
    }
    case types.ENTER_NEW_PATIENT: {
      let newStore = Object.assign({}, store);
      newStore.generalInfo = action.data;
      return newStore;
    }
    default:
      return store;
  }
};

export default patientInfoReducer;
