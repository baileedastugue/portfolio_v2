import { combineReducers } from 'redux';
import accessibilityReducer from './accessibilityReducer';

export default combineReducers({
     accessibility: accessibilityReducer,
});
