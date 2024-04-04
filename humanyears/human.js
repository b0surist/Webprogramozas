function calculateAges(humanYears) {
    let catYears = 0;
    let dogYears = 0;
    if (humanYears >= 1) {
        if (humanYears >= 1) {
            catYears += 15;
        }
        if (humanYears >= 2) {
            catYears += 9;
        }
        if (humanYears > 2) {
            catYears += (humanYears - 2) * 4;
        }
        if (humanYears >= 1) {
            dogYears += 15;
        }
        if (humanYears >= 2) {
            dogYears += 9;
        }
        if (humanYears > 2) {
            dogYears += (humanYears - 2) * 5;
        }
    }
    return [humanYears, catYears, dogYears];
}