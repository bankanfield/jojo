import {combineReducers} from 'redux';
import But1Reducer from './but1Reducer';

const rootReducer = combineReducers({
  but1: But1Reducer
});

export default rootReducer;