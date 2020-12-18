const capitalizeFirst = word => {
    const wordAllLow = word.toLowerCase();
    const firstLetterUpper = wordAllLow.charAt(0).toUpperCase();
    const arr = [...wordAllLow];
    arr[0] = firstLetterUpper;
    console.log(arr.join(""))
}


capitalizeFirst("HENK");

const containsNumberBiggerThan10 = function (array) {
    return array.includes(item => item>10)
}
console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]))