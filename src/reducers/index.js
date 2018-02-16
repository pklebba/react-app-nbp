import { combineReducers } from 'redux';

import star from './star';
import currencies from './currencies';

const rootReducer = combineReducers([
    star,
    currencies,
]);

export default rootReducer;