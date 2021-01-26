import {data} from "./data.mjs";

const name = (array, text) => {
    const filteredNames = [...array.map(item => item.map(element => {
        return element[text]
    }))]
    const test = filteredNames.join().split(",")
    return [...new Set(test)]
}
const filter = (array, text, flop) => {
    const newArray = [];
    const test = (array.map(element => element.find(item => {
        return item[text] === flop
    })));
    newArray.push(test)
    return newArray;
}
const newData = (array, text) => {
    const names = name(array, text)
    return names.map(element => filter(array, text, element));
}
const newDataNumber = (array, text) => {
    const names = name(array, text)
    return names.map(element => {
        return filter(array, text, parseInt(element));
    });
}

const fii = newData(data, "first_name");
const faa = newDataNumber(data, "age")
console.log(fii[0])
console.log(faa[0])
