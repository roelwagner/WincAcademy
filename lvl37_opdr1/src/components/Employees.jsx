import React from "react";

const Employees = ({employees,addEmployee, makeEmployeeSick}) => {
    const isEmployee = employees.map(employee => {
        return  <tr key={employee.id} id={employee.id} >
                    <td>{employee.occupation}</td>
                    <td>{employee.name}</td>
                    <td>{employee.surname}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.email}</td>
                    <td><input type="checkbox" onChange={makeEmployeeSick} checked={employee.sick} /></td>
                </tr>
    });
    return(
        <div>
            <form onSubmit={addEmployee}>
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="surname" placeholder="Surname" />
                <input type="number" name="birthyear" placeholder="Birthyear" />
                <select name="occupation">
                    <option name="dentist">Dentist</option>
                    <option name="assistent">Assistent</option>
                </select>
                <input type="phone" name="phone" placeholder="Phone" />
                <input type="mail" name="email" placeholder="E-mail" />
                <button>Add Employee</button>
            </form>
            <table>
                    <tbody>
                        <tr className="song-header">  
                            <th>Occupation</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Phone number</th>
                            <th>E-mail</th>
                            <th>Sick</th>
                        </tr>
                        {isEmployee}
                    </tbody>
                </table>
        </div>
    )
}

export default Employees;