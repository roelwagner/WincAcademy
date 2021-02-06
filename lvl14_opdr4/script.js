function getNum(num1, num2){
    const num3 = num1 * num1;
    const num4 = num2 * num2;
    return (num3+num4)*(num3+num4);
}

const getNum1 = function(num1, num2){
    const num3 = num1 * num1;
    const num4 = num2 * num2;
    return (num3+num4)*(num3+num4);
}

const getNum2 = (num1, num2) => {
    const num3 = num1 * num1;
    const num4 = num2 * num2;
    return (num3+num4)*(num3+num4);
}

console.log(getNum(2,3));
console.log(getNum1(2,3));
console.log(getNum2(2,3));