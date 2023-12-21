import { gcd } from './index';

describe('gcd', () => {
  it('correctly return gcd of two values', () => {
	expect(gcd(36, 63)).toBe(9);
  });
  it('returns 1 for two prime numbers', () => {
    expect(gcd(17, 13)).toBe(1);
  });
  it('handles negative numbers', () => {
    expect(gcd(-8, 12)).toBe(4);
    expect(gcd(15, -5)).toBe(5);
  });
  it('handles large numbers', () => {
    expect(gcd(123456, 789012)).toBe(12);
  });
  
  // You can add more test cases as needed, including edge cases.
});