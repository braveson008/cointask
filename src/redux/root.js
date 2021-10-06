import {combineReducers} from 'redux';

import coin from './coins/reducer';

const reducers = {
  coin,
};

const reducer = combineReducers(reducers);

export default reducer;
