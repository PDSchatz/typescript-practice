import { pack } from './index';  // Adjust the import path as needed

describe('pack function', () => {
  it('packs consecutive duplicates into sublists', () => {
	expect(pack([1,1,1,2,3,3,1,1,5,6,6,6,6])).toEqual([[1,1,1], [2], [3,3], [1,1], [5], [6,6,6,6]]);
  });

  it('handles empty array', () => {
	expect(pack([])).toEqual([]);
  });

  it('handles array with no duplicates', () => {
	expect(pack([1,2,3,4])).toEqual([[1], [2], [3], [4]]);
  });

  it('packs consecutive duplicates for string array', () => {
	expect(pack(['a', 'a', 'b', 'c', 'c', 'a'])).toEqual([['a', 'a'], ['b'], ['c', 'c'], ['a']]);
  });

  it('packs consecutive duplicates for boolean array', () => {
	expect(pack([true, true, false, true])).toEqual([[true, true], [false], [true]]);
  });

  // Additional test cases can be added as necessary
});