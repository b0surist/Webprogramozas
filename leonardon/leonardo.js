function leonardoNumbers(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [1];
    } else if (n === 2) {
      return [1, 1];
    } else {
    const result = [1, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2] + 1);
    }
    return result;
    }
}
const n = 5;
const leonardoArray = leonardoNumbers(n);
console.log(leonardoArray);