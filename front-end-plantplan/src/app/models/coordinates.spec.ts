import { Coordinates } from './coordinates';

describe('Coordinates', () => {
  it('should create an instance', () => {
    expect(new Coordinates(42.932, -71.426)).toBeTruthy();
  });
});
