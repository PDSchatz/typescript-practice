import { encode } from './index'; 

describe('encode function', () => {
    
  // Test case for an empty string
  it('should return an empty array for an empty string', () => {
    expect(encode('')).toEqual([]);
  });

  // Test case for a string with no consecutive duplicates
  it('should handle string with no consecutive duplicates', () => {
    expect(encode('abcd')).toEqual([[1, 'a'], [1, 'b'], [1, 'c'], [1, 'd']]);
  });

  // Test case for a string with consecutive duplicates
  it('should handle string with consecutive duplicates', () => {
    expect(encode('aaaabccaadeeee')).toEqual([[4, 'a'], [1, 'b'], [2, 'c'], [2, 'a'], [1, 'd'], [4, 'e']]);
  });

  // Test case for a string with a single character
  it('should handle single character string', () => {
    expect(encode('a')).toEqual([[1, 'a']]);
  });

  // Test case for a string with all characters being the same
  it('should handle string with all characters being the same', () => {
    expect(encode('aaaa')).toEqual([[4, 'a']]);
  });


  // Additional test cases can be added as necessary
});