import { FILTER_PLAYERS } from '../actionCreator'

const initialState = {
};

// a reducers takes 2 things, the action and a copy of the current state.

function filter(state = initialState, action) {
    switch (action.type) {
      case FILTER_PLAYERS:
        const tempstate = {
          name: action.name,
          age: action.age,
          position: action.position,
        }
        // Clears the filter object off unused filters
        for (let propName in tempstate) { 
          if (tempstate[propName] === '') {
            delete tempstate[propName];
          }
        }
        return tempstate;

      default:
      return state;
    }
  }

export default filter;