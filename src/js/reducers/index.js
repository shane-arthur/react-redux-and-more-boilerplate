/* eslint arrow-body-style: 0*/

import homepage from './homepage';
import otherpage from './otherpage';

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
    (nextState, key) => {
      nextState[key] = reducers[key]( // eslint-disable-line no-param-reassign
      state[key],
      action,
      );
      return nextState;
    },
    {},
    );
  };
};

const rootReducer = combineReducers({
  homepage,
  otherpage,
});

export default rootReducer;
