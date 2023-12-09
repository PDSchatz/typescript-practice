import { example } from './index';

describe('example function', () => {
  it('correctly returns "Hello, world!"', () => {
	expect(example()).toBe("Hello, world!");
  });

  // You can add more test cases as needed, including edge cases.
});