function every(array, interval, start_index = 0) {
    const result = [];
    for (let i = start_index; i < array.length; i += interval) {
        result.push(array[i]);
    }
    return result;
}
