import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../_reducers/index';
import InitialStore from '../store/initalStore';
import logger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';

export default function configureStore(initalStore = InitialStore) {
  const store = createStore(
    rootReducer,
    initalStore,
    compose(applyMiddleware(logger, thunkMiddleware), autoRehydrate())
  );
  persistStore(store);
  return store;
}
