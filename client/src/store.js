import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import productReducer from './reducers/product_reducer';

const reducers = combineReducers({
  form: formReducer,
  productReducer,
});

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);
/* eslint-enable */

export default store;
