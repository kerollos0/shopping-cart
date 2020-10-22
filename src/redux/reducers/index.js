import {combineReducers} from 'redux';
import rootReducers from './rootReducer';

export default combineReducers({
    basket:rootReducers
});