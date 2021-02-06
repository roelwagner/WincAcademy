const isNumberBiggerThen100 = number => {
    return number > 100 ? true : false;
}

const bouncingBrenda = (maxCapacity, peopleInside, ageVisitor) => {
    if(maxCapacity > peopleInside && ageVisitor > 17){
        return "come in";
    } else if(maxCapacity <= peopleInside){
        return "it's too busy now, come back later";
    } else{
        return "this is a club for adults"
    }
}

const calculateAverage = (num1, num2, num3, num4, num5) => {
    const average = (num1 + num2 + num3 + num4 + num5) /5
    return Math.round(average)
}
console.log(calculateAverage(11,22,33,44,55))