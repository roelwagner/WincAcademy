import {data} from "./data.mjs";

const getAmountOfStudents = array => {
    const students = array.map(element => element.map(item => item.active));
    const activeStudents = students.flat().filter(item => item === true);
    return activeStudents.length;
}

console.log(getAmountOfStudents(data))