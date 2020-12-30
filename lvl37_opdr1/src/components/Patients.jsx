import React from "react";

const Patients = ({patients, makePatientSick, addPatient}) => {
    const isPatient = patients.map(patient => {
        return  <tr key={patient.id} id={patient.id} >
                    <td>{patient.name}</td>
                    <td>{patient.surname}</td>
                    <td>{patient.birthyear}</td>
                    <td>{patient.phone}</td>
                    <td>{patient.email}</td>
                    <td><input type="checkbox" onChange={makePatientSick} checked={patient.sick} /></td>
                </tr>
    });
    return(
        <div>
            <form onSubmit={addPatient}>
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="surname" placeholder="Surname" />
                <input type="number" name="birthyear" placeholder="Birthyear" />
                <select name="occupation">
                    <option name="dentist">Dentist</option>
                    <option name="assistent">Assistent</option>
                </select>
                <input type="phone" name="phone" placeholder="Phone" />
                <input type="mail" name="email" placeholder="E-mail" />
                <button>Add Patient</button>
            </form>
            <table>
                    <tbody>
                        <tr className="song-header">  
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Birthyear</th>
                            <th>Phone number</th>
                            <th>E-mail</th>
                            <th>Sick</th>
                        </tr>
                        {isPatient}
                    </tbody>
                </table>
        </div>
    )
}

export default Patients;