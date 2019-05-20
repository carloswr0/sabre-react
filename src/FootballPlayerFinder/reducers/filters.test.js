import filters from './filters';
import expect from 'expect';

describe('filters reducers test', () => {
  it('should return the initial state', () => {
    expect(filters(undefined, {})).toEqual({});
  });
});