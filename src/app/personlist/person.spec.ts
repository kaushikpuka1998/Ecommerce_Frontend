import { Person } from './person';

describe('Person', () => {
  it('should create an instance', () => {
    expect(new Person("Kaushik","Ghosh","kaushikghoshgmail.com",5000)).toBeTruthy();
  });
});
