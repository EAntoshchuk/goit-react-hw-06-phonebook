import { legacy_createStore as createStore } from 'redux';
import { useSelector } from 'react-redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {};

const enhancer = devToolsEnhancer();

const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = createStore(rootReducer, enhancer);
