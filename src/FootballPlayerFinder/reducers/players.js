import { FETCH_PLAYERS } from '../actionCreator';
import { FETCH_PLAYERS_FAILURE } from '../actionCreator';

const initialState = [];

function players(state = initialState, action) {
  switch(action.type) {
    case FETCH_PLAYERS:
      return [...state, ...action.payload];
    
    case FETCH_PLAYERS_FAILURE:
      return state; 
       
    default:
      return state;   
  }
}

export default players;