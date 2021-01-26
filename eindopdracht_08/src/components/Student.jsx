import React from "react";
import Chart from "./Chart";
import Nav from "./Nav";
import Options from "./Options";
import Table from "./Table";

const Student = ({  data, 
                    name, 
                    handleChange, 
                    difficult, 
                    fun, 
                    bargraph, 
                    handleGraph, 
                    handleChangeActive, 
                    handleData, 
                    chart, 
                    sortBy, 
                    sortData,
                    tableData
                    }) => {

    const studentData = data.map(item => item.find(element => element.first_name === name));

    const studentInfo = info => {
        return [...new Set(studentData.map(item => item[info]))]
    }

    return(
        <div className="student">
            <Nav data={data} handleChangeActive={handleChangeActive} />
            <div className="info">
                <span>
                    Naam: {studentInfo("first_name")} {studentInfo("last_name")}<br />
                    Leeftijd: {studentInfo("age")}<br />
                    Tel: {studentInfo("phone")}<br />
                    E-mail: {studentInfo("email")}<br />
                </span>
                
                <img src={studentInfo("photo")} alt={studentInfo("first_name")} className="image" />
            </div>
            <Options
                handleChange={handleChange}
                difficult={difficult}
                fun={fun}
                bargraph={bargraph}
                handleGraph={handleGraph}
                handleData={handleData}
                chart={chart}
            />
            {chart ? <Chart 
                data={studentData}
                handleChange={handleChange}
                difficult={difficult}
                fun={fun}
                bargraph={bargraph}
            /> : <Table tableData={tableData} sortBy={sortBy} sortData={sortData} /> }
            
        </div>
    )
}

export default Student;