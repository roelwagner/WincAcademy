import React from "react";
import App from "./App";
import data from "./data";

class Container extends React.Component{
    constructor(){
        super()
        this.state = {
            data: data,
            tableData: data,
            difficult: true,
            fun: true,
            chart: true,
            bargraph: true,
            sort: "Opdracht",
            multipleStudents: true
        }
    }

    handleChange = event => {
        if(event.target.value === "Leuk"){
            const opposit = !this.state.fun;
            this.setState({fun: opposit})
        } else{
            const opposit = !this.state.difficult;
            this.setState({difficult: opposit})
        }
    }

    handleGraph = () => {
        const opposit = !this.state.bargraph;
        this.setState({bargraph: opposit})
    }

    handleChangeActive = (event) => {
        const student = event.target.previousSibling.textContent;
        const alteredData = [...data.map(element => element.map(item => {
            if(item.first_name === student){
                item.active = !item.active;
            }
            return item;
        }))]
        this.setState({
            data: alteredData,
        })
    }

    handleStudent = event => {
        const student = event.target.textContent;
        const alteredData = [...data.map(element => element.map(item => {
            if(item.first_name !== student){
                item.active = false;
            } else{
                item.active = true;
            }
            return item;
        }))]
        this.setState({
            data: alteredData,
        })
    }
    
    handleData = () => {
        const opposit = !this.state.chart;
        this.setState({chart: opposit});
    }

    sortData = event => {
        const data = event.target.textContent
        
        const name = (array, text) => {
            const filteredNames = [...array.map(item => item.map(element => {
                return element[text]
            }))]
            const test = filteredNames.join().split(",")
            return [...new Set(test)]
        }
        const filter = (array, text, flop) => {
            const newArray = [];
            const test = (array.map(element => element.find(item => item[text] === flop)));
            newArray.push(test)
            return newArray;
        }
        const newData = (array, text) => {
            const names = name(array, text)
            return names.map(element => filter(array, text, element));
        }
        const newDataNumber = (array, text) => {
            const names = name(array, text)
            return names.map(element => filter(array, text, parseInt(element)));
        }
        switch(data){
            case "Voornaam":
                this.setState({tableData: this.state.data})
                const firstNameSortedData = newData(this.state.data, "first_name")
                .flat(1)
                .sort((a, b) => {
                    if (a[0].first_name < b[0].first_name) return -1;
                    if (a[0].first_name > b[0].first_name) return 1;
                    return 0;
                })
                this.setState({
                    tableData: firstNameSortedData,
                    sort: "Voornaam"
                })
                break;
            case "Achternaam":
                this.setState({tableData: this.state.data})
                const lastNameSortedData = newData(this.state.data, "last_name")
                .flat(1)
                .sort((a, b) => {
                    if (a[0].last_name < b[0].last_name) return -1;
                    if (a[0].last_name > b[0].last_name) return 1;
                    return 0;
                })
                this.setState({
                    tableData: lastNameSortedData,
                    sort: "Achternaam"
                })
                break;
            case "Leeftijd":
                this.setState({tableData: this.state.data})
                const ageSortedData = newDataNumber(this.state.data, "age")
                .flat(1)
                .sort((a, b) => {
                    if (a[0].age < b[0].age) return -1;
                    if (a[0].age > b[0].age) return 1;
                    return 0;
                })
                this.setState({
                    tableData: ageSortedData,
                    sort: "Leeftijd"
                })
                break;
            default:
                this.setState({
                    tableData: this.state.data,
                    sort: "Opdracht"
                })
        }
    }

    setAllActive = () => {
        const activateAll = [...this.state.data.map(element => element.map(item => {
            item.active = true;
            return item;
        }))]
        this.setState({
            data: activateAll,
        })
    }

    render(){
        return(
            <div>
                <App 
                    data={this.state.data}
                    tableData={this.state.tableData}
                    difficult={this.state.difficult}
                    fun={this.state.fun}
                    handleChange={this.handleChange}
                    bargraph={this.state.bargraph}
                    handleGraph={this.handleGraph}
                    handleChangeActive={this.handleChangeActive}
                    handleData={this.handleData}
                    chart={this.state.chart}
                    sortBy={this.state.sort}
                    sortData={this.sortData}
                    handleStudent={this.handleStudent}
                    multipleStudents={this.state.multipleStudents}
                    setAllActive={this.setAllActive}
                />
            </div>
        )
    }
}

export default Container;