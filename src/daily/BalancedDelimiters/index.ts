/*
    Function Name
isDelimiterBalanced

    Description
Write a function 'isDelimiterBalanced' that takes a string containing any combination of the delimiters '()', '{}', and '[]' and returns true if the delimiters are balanced. 
Delimiters are considered balanced if each opening delimiter has a corresponding closing delimiter in the correct order.

    Requirements
The function must take a single parameter - the input string to be checked.
The function should handle nested delimiters and return true if and only if all types of delimiters are balanced.
The function should return false if the string contains any non-delimiter characters.
The function should return true for an empty string.
Do not use language built-in functions or methods that simplify the check significantly.
The function must run in O(n) time, where n is the length of the string.
*/

// algo inspired by this Geeks4Geeks post: https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/
const openDelims = ["(", "[", "{"]
const closeDelims = [")", "]", "}"]
export function isDelimiterBalanced(str: string): boolean {
    // if string length is odd, delims cannot be balanced
    if(str.length % 2 !== 0){
        return false
    }

    // if the string is empty, chatGPT wants us to return true
    if(str.length === 0) {
        return true
    }

    const strArray = str.split("")
    const currentOpenDelims = []

    for(let delim of strArray) {
        // if current character is an open delimiter, push it into the stack
        if(openDelims.includes(delim)) {
            currentOpenDelims.push(delim)
        }

        // if the current character is a close delimiter, pop the most recent open one from the stack
        if(closeDelims.includes(delim)) {
            const currentOpenDelim = currentOpenDelims.pop()
            // if the current close delimiter doesn't match to an open one, delims cannot be balanced
            if(currentOpenDelim && openDelims.indexOf(currentOpenDelim) !== closeDelims.indexOf(delim)) {
                return false
            }
        }
    }

    // if there are any "unclosed" delims, they cannot be balanced
    return currentOpenDelims.length === 0
}