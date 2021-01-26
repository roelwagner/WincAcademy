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
                        tableData
                        }) => {
    return(
        <div className="students">
            <Nav data={data} handleChangeActive={handleChangeActive} />
            <div className="info all-students">
                All students
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
                data={data} 
                multipleStudents={true} 
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