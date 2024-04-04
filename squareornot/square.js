function processNumbers(arr) {
    return arr.map(num => {
        const sqrt = Math.sqrt(num);
        return Number.isInteger(sqrt) ? sqrt : num * num;
    });
}