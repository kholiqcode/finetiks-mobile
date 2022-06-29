/* eslint-disable @typescript-eslint/no-var-requires */
import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import logger from 'redux-logger';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import { combinedMiddleware } from '@services';

import { rootPersistConfig, rootReducer } from './rootReducer';

/**
 * Setup redux store
 */

// eslint-disable-next-line import/no-extraneous-dependencies
const createDebugger = require('redux-flipper').default;

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
      __DEV__ && !process.env.JEST_WORKER_ID
        ? getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
          })
            .concat(combinedMiddleware)
            .concat(logger)
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            .concat(createDebugger!())
        : getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
          }).concat(combinedMiddleware),
    preloadedState,
  });
};

// const store = configureStore({
//   reducer: persistReducer(rootPersistConfig, rootReducer),
//   middleware: (getDefaultMiddleware) =>
//     __DEV__ && !process.env.JEST_WORKER_ID
//       ? getDefaultMiddleware({
//           serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//           },
//         })
//           .concat(combinedMiddleware)
//           .concat(logger)
//           // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//           .concat(createDebugger!())
//       : getDefaultMiddleware({
//           serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//           },
//         }).concat(combinedMiddleware),
// });

const store = setupStore();

const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

const useReduxDispatch = () => useDispatch<AppDispatch>();
const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * Initial Redux Query
 */

export {
  AppStore,
  persistor,
  RootState,
  store,
  useDispatch,
  useReduxDispatch,
  useReduxSelector,
  useSelector,
};
