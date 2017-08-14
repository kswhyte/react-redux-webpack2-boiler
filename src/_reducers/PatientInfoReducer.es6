import * as types from '../constants/actionTypes';

//inital state is set inside the store/initialState.es6
const patientInfoReducer = (store = {}, action) => {
  switch (action.type) {
    case types.GET_PATIENT_INFO_SUCCESS: {
      return Object.assign({}, store, { generalInfo: action.data.generalInfo });
    }
    default:
      return store;
  }
};

export default patientInfoReducer;
