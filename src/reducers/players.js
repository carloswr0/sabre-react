import { FETCH_PLAYERS } from '../actions/actionCreator'

const initialState = [];

// a reducers takes 2 things, the action and a copy of the current state.
function players(state = initialState, action) {
  switch(action.type) {
    case FETCH_PLAYERS:
      return [...state, ...action.payload];

    default:
      return state;
  }
}

export default players;