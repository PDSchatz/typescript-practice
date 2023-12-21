// (**) Eliminate consecutive duplicates of list elements.

// If a list contains repeated elements they should be replaced with a single copy of the element. The order of the elements should not be changed.

// [1,1,1,2,2,3,3,1,1,6,7,7,7,7] -> [1,2,3,1,6,7]

// start by defining the function:
// export function compress.... Good Luck!

export function compress<Type>(arr: Type[]): Type[] {
    let pointerA: number = 0
    let pointerB: number = 1
    let output: Array<Type>  = []

    while(pointerA <= (arr.length - 1)){
        let elementA = arr[pointerA]
        let elementB = arr[pointerB]
        if(elementA !== elementB){
            output.push(elementA)
        }
        pointerA++
        pointerB++
    }

    return output
}

export function compressTwo<T>(arr: T[]): T[] {
    const output = arr.reduce<T[]>((acc, cur) => {
        if(!acc.includes(cur)){
            acc.push(cur)
        }
        return acc
    }, [])
    return output
}