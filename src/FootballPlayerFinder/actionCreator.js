export const FETCH_PLAYERS = 'FETCH_PLAYERS';
export const FILTER_PLAYERS = 'FILTER_PLAYERS';
export const FETCH_PLAYERS_FAILURE = 'FETCH_PLAYERS_FAILURE';

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
    .catch(error => dispatch({ type: 'FETCH_PLAYERS_FAILURE', error: error.message }))
  }
}

// set filter params
export function setFilters(name, age, position) {
  return {
    type: FILTER_PLAYERS,
    name,
    age,
    position
  }
}
