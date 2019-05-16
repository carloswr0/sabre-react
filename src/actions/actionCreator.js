export const FETCH_PLAYERS = 'FETCH_PLAYERS';
export const FILTER_PLAYERS = 'FILTER_PLAYERS';

// request api
export const getAllPlayers = () => {
  return (dispatch) => {
    fetch(`https://football-players-b31f2.firebaseio.com/players.json?print=pretty`)
    .then(response => response.json())
    .then(players => {
      dispatch({
        type: FETCH_PLAYERS,
        payload: players,
      })
    })
  }
}

// set filter params
export function setFilters(name, age, position) {
  return {
    type: 'FILTER_PLAYERS',
    name,
    age,
    position
  }
}