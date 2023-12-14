// (**) Pack consecutive duplicates of list elements into sublists. Solutions
 

// If a list contains repeated elements they should be placed in separate sublists.
// NON DESTRUCTIVE - the original array is NOT modified 

// Example:  [1,1,1,2,3,3,1,1,5,6,6,6,6] -> [[1,1,1], [2],[3,3],[1,1],[5], [6,6,6,6]]

// start by defining the function:
// export function pack.... Good Luck!

/**
 * function signature boilerplate:
    export function pack<Type>(arr: Type[]): Array<Type[]> {
        return [arr]
    }
 * 
 */

// extremely naieve solution
export function pack<Type>(arr: Type[]): Array<Type[]> {
    const output: Array<Type[]> =[]
    let outputIndex = 0
    for(let i = 0; i < arr.length; i++) {
        const el = arr[i]

        if(i === 0){
            output.push([el])
            continue;
        }

        if(el === output[outputIndex][0]) {
            output[outputIndex].push(el)
        } else {
            output.push([el])
            outputIndex++
        }
    }
    return output
}