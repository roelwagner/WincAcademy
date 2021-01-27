import React from "react";
import Chart from "./Chart";
import Nav from "./Nav";
import Options from "./Options";
import Table from "./Table";

const AllStudents = ({  data, 
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
                        tableData,
                        handleStudent,
                        multipleStudents,
                        setAllActive
                        }) => {
    
    const studentNames = data.map(element => element.map(item => {
        return item.active ? `${item.first_name} ` : null;
    }));
    
    return(
        <div className="students">
            <Nav 
                data={data} 
                handleChangeActive={handleChangeActive} 
                handleStudent={handleStudent} 
                setAllActive={setAllActive}
            />
            <ul className="info all-students">
                {studentNames[0]}
            </ul>
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
                data={data} 
                multipleStudents={multipleStudents} 
                handleChange={handleChange}
                difficult={difficult}
                fun={fun}
                bargraph={bargraph}
                handleGraph={handleGraph}
            /> : <Table tableData={tableData} sortBy={sortBy} sortData={sortData} /> }
        </div>
    )
}

export default AllStudents;