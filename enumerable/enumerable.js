function eachCons(list, n) {
    const subsets = [];
    for (let i = 0; i <= list.length - n; i++) {
        subsets.push(list.slice(i, i + n));
    }
    return subsets;
}