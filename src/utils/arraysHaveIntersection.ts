const arraysHaveIntersection = (array1:number[] | string[], array2: number[] | string[]): boolean=> {
    const set1 = array;
    const result = array2.filter(item => set1.has(item));
    return result.length > 0;
}

export default arraysHaveIntersection;

