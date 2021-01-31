import React from "react";

const Table = ({ tableData, sortBy, sortData}) => {

    const alteredData = [...tableData.map(element => element.filter(item => {
        return item.active === true;
    }))]

    const activeStudents = alteredData.map(element => element.map(item => {
        return   <tr key={item.id}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td className="num" >{item.age}</td>
                    <td className="phone">{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.project}</td>
                    <td className="num" >{item.enjoyment}</td>
                    <td className="num" >{item.difficulty}</td>
                </tr>
    }))
    return(
        <div className="table-component">
            <h3 className="sorttext">Gesorteerd op {sortBy}</h3>
            <table className="table">
                <tbody>
                    <tr>
                        <th onClick={sortData} className="tablehead" >Voornaam</th>
                        <th onClick={sortData} className="tablehead" >Achternaam</th>
                        <th onClick={sortData} className="tablehead" >Leeftijd</th>
                        <th>Telefoon</th>
                        <th>Email</th>
                        <th onClick={sortData} className="tablehead" >Opdracht</th>
                        <th>Opdracht leuk</th>
                        <th>Opdracht moeilijk</th>
                    </tr>
                    {activeStudents}
                </tbody>
            </table>
        </div>
    );
}

export default Table;