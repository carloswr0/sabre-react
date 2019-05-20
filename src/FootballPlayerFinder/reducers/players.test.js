import players from './players';
import expect from 'expect';

describe('Players reducers test', () => {
  it('should return the initial state', () => {
    expect(players(undefined, {})).toEqual([]);
  });
});