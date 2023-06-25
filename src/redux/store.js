import { legacy_createStore as createStore } from 'redux';
import { useSelector } from 'react-redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { configureStore, createReducer } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { valueReducer } from './valueSlice';

const initialState = {};

const enhancer = devToolsEnhancer();

const myReducer = createReducer(10, {});

const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = configureStore({
  reducer: {
    maValue: myReducer,
    value: valueReducer,
  },
});

export const persistor = persistStore(store);
