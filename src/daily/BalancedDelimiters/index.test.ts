import { isDelimiterBalanced } from ".";
/*
isDelimiterBalanced('(()){}') -> true √
isDelimiterBalanced('[{()}]') -> true √
isDelimiterBalanced('({[}])') -> false √
isDelimiterBalanced('((()))') -> true √
isDelimiterBalanced('(()[]{})') -> true √
isDelimiterBalanced('(()') -> false √
isDelimiterBalanced('((){}[') -> false √
isDelimiterBalanced('') -> true √
*/
describe("is de-limiter balanced: ", () => {
    it("returns true if all delimiters are balanced", () => {
        expect(isDelimiterBalanced('(()){}')).toEqual(true)
    })

    it("returns true if all delimiters are balanced", () => {
        expect(isDelimiterBalanced('(()[]{})')).toEqual(true)
    })

    it("handles all three types of delimiter: ", () => {
        expect(isDelimiterBalanced('[{()}]')).toEqual(true)
    })

    it("returns true if string is empty: ", () => {
        expect(isDelimiterBalanced('')).toEqual(true)
    })

    it("rejects delimiters that are equal but not in balanced order: ", () => {
        expect(isDelimiterBalanced('({[}])')).toEqual(false)
    })

    it("rejects unbalanced delimiters: ", () => {
        expect(isDelimiterBalanced('(()')).toEqual(false)
    })

    it("works for this test: ", () => {
        expect(isDelimiterBalanced('((()))')).toEqual(true)
    })

    it("also works for this test: ", () => {
        expect(isDelimiterBalanced('((){}[')).toEqual(false)
    })
})