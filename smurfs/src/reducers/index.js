import {
  SMURF_FETCH,
  SMURF_FETCHED,
  SMURF_ADD,
  SMURF_ADDED,
  SMURF_DELETE,
  SMURF_DELETED
} from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  fetchedSmurfs: false,
  addingSmurf: false,
  addedSmurf: false,
  deletingSmurf: false,
  deletedSmurf: false,
  error: false
};

export const rootReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case (SMURF_FETCH):
      return {
        ...state,
        fetchingSmurfs: true
      };
    case (SMURF_FETCHED):
    console.log(action.payload);
    console.log("I am mikecy");
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        fetchedSmurfs: true
      };
    case SMURF_ADD:
      return {
        ...state,
       addingSmurf: true, 
      };
    case SMURF_ADDED:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false,
        addedSmurf: true
      };
	case SMURF_DELETE:
	return {
		...state,
		deletingSmurf: true,
	};
	case SMURF_DELETED:
	return {
		...state,
		deletingSmurf: false,
		deletedSmurf: true
	};
    default:
      return state;
  }
};