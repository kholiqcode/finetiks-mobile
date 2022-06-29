// ----------------------------------------------------------------------

import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';

import { applicationReducer } from './application';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // keyPrefix: 'redux-',
  whitelist: [],
  // stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  ...applicationReducer,
});

export { rootPersistConfig, rootReducer };
