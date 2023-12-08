import { compress } from './index';

describe('compress function', () => {
	it('eliminates consecutive duplicates', () => {
		expect(compress([1,1,1,2,2,3,3,1,1,6,7,7,7,7])).toEqual([1,2,3,1,6,7]);
	});
	
	it('handles empty array', () => {
		expect(compress([])).toEqual([]);
	});
	
	it('handles array with no duplicates', () => {
		expect(compress([1,2,3,4])).toEqual([1,2,3,4]);
	});
	
	it('eliminates consecutive duplicates in a string array', () => {
  		expect(compress(['a', 'a', 'b', 'b', 'c', 'a', 'a'])).toEqual(['a', 'b', 'c', 'a']);
	});
	
	it('eliminates consecutive duplicates in a boolean array', () => {
		expect(compress([true, true, false, false, true])).toEqual([true, false, true]);
	});
});
