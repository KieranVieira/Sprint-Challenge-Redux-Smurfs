import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE,
  UPDATE_SMURF_START,
  UPDATE_SMURF_SUCCESS,
  UPDATE_SMURF_FAILURE
} from '../actions'


const initialState = {
   smurfs: [],
   isFetchingSmurfs: false,
   isAddingSmurf: false,
   isUpdatingSmurf: false,
   isDeletingSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const smurfReducer = (state = initialState, action) => {
  switch (action.type){
    case FETCH_SMURFS_START:
      return{
        ...state,
        isFetchingSmurfs: true,
        error:''
      }
    case FETCH_SMURFS_SUCCESS:
      return{
        ...state,
        smurfs: action.payload,
        isFetchingSmurfs: false
      }
    case FETCH_SMURFS_FAILURE:
      return{
        ...state,
        isFetchingSmurfs: false,
        error: action.payload
      }
    case ADD_SMURF_START:
      return{
        ...state,
        isAddingSmurf: true,
        error: ''
      }
    case ADD_SMURF_SUCCESS:
      return{
        ...state,
        smurfs: action.payload,
        isAddingSmurf: false,
        error: ''
      }
    case ADD_SMURF_FAILURE:
      return{
        ...state,
        isAddingSmurf: false,
        error: action.payload
      }
    case DELETE_SMURF_START:
      return{
        ...state,
        isDeletingSmurf: true,
        error: ''
      }
    case DELETE_SMURF_SUCCESS:
      return{
        ...state,
        smurfs: action.payload,
        isDeletingSmurf: false,
        error: ''
      }
    case DELETE_SMURF_FAILURE:
      return{
        ...state,
        isDeletingSmurf: false,
        error: action.payload
      }
    case UPDATE_SMURF_START:
      return{
        ...state,
        isUpdatingSmurf: true,
        error: ''
      }
    case UPDATE_SMURF_SUCCESS:
      return{
        ...state,
        smurfs: action.payload,
        isUpdatingSmurf: false,
        error: ''
      }
    case UPDATE_SMURF_FAILURE:
      return{
        ...state,
        isUpdatingSmurf: false,
        erros: action.payload
      }
    default:
      return state;
  }
}
