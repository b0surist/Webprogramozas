function map(arr, func) {
    if (typeof func !== 'function') {
        return 'given argument is not a function';
    }

    if (!arr.every(element => typeof element === 'number')) {
        return 'array should contain only numbers';
    }

    return arr.map(func);
}

function func(num) {
    return num % 2 === 0;
}