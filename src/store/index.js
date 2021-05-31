"use strict";

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import recipeReducer from './find.js';

import thunk from 'redux-thunk';

const reducers = combineReducers({ recipes: recipeReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();