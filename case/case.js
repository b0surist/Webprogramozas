function sortme(arr) {
    return arr.sort(function(a, b) {
        return a.localeCompare(b, 'en', { sensitivity: 'base', caseFirst: 'upper' });
    });
}
