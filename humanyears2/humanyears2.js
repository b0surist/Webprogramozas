function ownedCatAndDog(catYears, dogYears) {
    const ownedCat = catYears <= 15 ? 1 : catYears <= 24 ? 1 : 2 + Math.floor((catYears - 24) / 4);
    const ownedDog = dogYears <= 15 ? 1 : dogYears <= 24 ? 1 : 2 + Math.floor((dogYears - 24) / 5);
    return [ownedCat, ownedDog];
}