import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { thunk } from '../reducers/middleware/clientMiddleware';
import { loadState } from './utils/localStorage';

export default function configureStore(initialState) {
  const cachedState = loadState();

  if (cachedState) {
    Object.keys(cachedState).forEach((stateKey) => {
      if (Object.keys(cachedState[stateKey]).length > 0) {
        initialState[stateKey] = cachedState[stateKey]; // eslint-disable-line no-param-reassign
      }
    });
  }

  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
