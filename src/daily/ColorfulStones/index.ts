
interface TcolorFace { [key: string]: number }
/**
    Description
  
 Write a function 'colorfulStones' that, given an array of stones, each represented by a letter that signifies its color, calculates the most rare color, i.e., the color that occurs the least number of times in the array. If there is a tie, return an array with the tied colors sorted alphabetically. Assume each stone's color is represented by a single uppercase letter ('A'–'Z').

    Requirements

 The function must take a single parameter: an array of characters representing stone colors.
 The function must return either a single character (the most rare color) or an array of characters (if there is a tie).
 The function must handle empty arrays, in which case it should return a specific error value or message as per your language convention for such scenarios.
 The function must not use any external libraries.
 The function must run with a linear time complexity (O(n)) with respect to the number of stones.

    Example Usage

 1) colorfulStones(['A', 'B', 'C', 'A', 'B', 'C', 'A']) should return 'B' or 'C'. ['B', 'C'], 
 2) colorfulStones(['G', 'B', 'G', 'G', 'R', 'B', 'R', 'B']) should return 'R'.
 3) colorfulStones(['F', 'F', 'F']) should return 'F'.
 4) colorfulStones([]) should return an error message or a special value indicating the input is invalid.
*/

export function colorfulStones(stones: string[]): (string | string[]) {
    if(stones.length === 0) {
        throw new Error("no length")
    }

    let output = []

    const colorMap = stones.reduce<TcolorFace>((acc, cur): TcolorFace => {
        if(acc[cur]) {
            acc[cur] += 1
            return acc
        } else {
            acc[cur] = 1
            return acc
        }
    }, {} as TcolorFace)

    for(let color in colorMap) {
        if(output.length === 0){
            output.push(color)
        } else {
            const val = colorMap[color]
            output.forEach(outColor => {
                if(colorMap[outColor] > val) {
                    output[0] = color
                }

                if(colorMap[outColor] === val) {
                    output.push(color)
                }
            })
        }
    }
    return output.length === 1 ? output[0] : output
}