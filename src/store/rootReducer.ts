import { combineReducers } from 'redux';
import Map from './Map/reducer';
import Task from './Task/reducer';

export default combineReducers({
    Map,
    Task,
});
