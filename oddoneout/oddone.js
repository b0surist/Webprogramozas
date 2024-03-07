function oddOnesOut(numbers) {
    const counts = {};
    for (const num of numbers) {
        counts[num] = (counts[num] || 0) + 1;
    }
    return numbers.filter(num => counts[num] % 2 === 0);
}