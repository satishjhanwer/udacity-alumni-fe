import * as types from './constants';

export const initialState = {
  // Initial State goes here!
};

const meetupsReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.DEFAULT_ACTION:
        return state;
      default:
        return state;
    }
  };

export default meetupsReducer;
