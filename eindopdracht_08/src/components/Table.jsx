import React from "react";

const Table = ({ tableData, sortBy, sortData}) => {

    const alteredData = [...tableData.map(element => element.filter(item => {
        return item.active === true;
    }))]

    const activeStudents = alteredData.map(element => element.map(item => {
        return   <tr key={item.id}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.age}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.project}</td>
                    <td>{item.enjoyment}</td>
                    <td>{item.difficulty}</td>
                </tr>
    }))
    return(
        <div>
            <p className="sorttext">Gesorteerd op {sortBy}</p>
            <table className="table">
                <tbody>
                    <tr>
                        <th onClick={sortData}>Voornaam</th>
                        <th onClick={sortData}>Achternaam</th>
                        <th onClick={sortData}>Leeftijd</th>
                        <th>Telefoon</th>
                        <th>Email</th>
                        <th onClick={sortData}>Opdracht</th>
                        <th onClick={sortData}>Opdracht leuk</th>
                        <th onClick={sortData}>Opdracht moeilijk</th>
                    </tr>
                    {activeStudents}
                </tbody>
            </table>
        </div>
        
    );
}

export default Table;