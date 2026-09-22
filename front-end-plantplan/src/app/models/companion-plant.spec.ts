import { CompanionPlant } from './companion-plant';

describe('CompanionPlant', () => {
  it('should create an instance', () => {
    expect(new CompanionPlant("Cucumber", "Because of reasons")).toBeTruthy();
  });
});
