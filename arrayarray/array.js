function arrCheck(arr) {
    return arr.every(function(element) {
        return Array.isArray(element);
    });
}