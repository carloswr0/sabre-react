import { mapStateToProps } from './App';

describe('App Component', () => {
  it('It should return the state', () => {
    const initialState = {
      players: [{
        "contractUntil" : "2022-06-30",
        "dateOfBirth" : "1993-05-13",
        "jerseyNumber" : 9,
        "name" : "Romelu Lukaku",
        "nationality" : "Belgium",
        "position" : "Centre-Forward"
      }],
    };      
    expect(mapStateToProps(initialState)).toEqual({
      players: [{
        "contractUntil" : "2022-06-30",
        "dateOfBirth" : "1993-05-13",
        "jerseyNumber" : 9,
        "name" : "Romelu Lukaku",
        "nationality" : "Belgium",
        "position" : "Centre-Forward"
      }],
    });
  });
})