import { colorfulStones } from ".";
/*
    1) colorfulStones(['A', 'B', 'C', 'A', 'B', 'C', 'A']) should return 'B' or 'C'. ['B', 'C'], 
    2) colorfulStones(['G', 'B', 'G', 'G', 'R', 'B', 'R', 'B']) should return 'R'.
    3) colorfulStones(['F', 'F', 'F']) should return 'F'.
    4) colorfulStones([]) should return an error message or a special value indicating the input is invalid.
 */
describe('colorful stones function', () => {
    it("returns the rarest color", () => {
        expect(colorfulStones(['A', 'B', 'C', 'A', 'B', 'A'])).toEqual('C')
    })

    it('handles ties between colors', () => {
        expect(colorfulStones(['A', 'B', 'C', 'A', 'B', 'C', 'A'])).toEqual(['B', 'C'])
    })

    it('handles inputs for single color', () => {
        expect(colorfulStones(['F', 'F', 'F', 'F'])).toEqual('F')
    })
    // I think this is right? Struggled with this test, but this stackoverflow
    // provided guidance: https://stackoverflow.com/questions/46042613/how-to-test-the-type-of-a-thrown-exception-in-jest
    it('errors out for empty arrays', () => {
        expect(() => colorfulStones([])).toThrow(Error("no length"))
    })
})