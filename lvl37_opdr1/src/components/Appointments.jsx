import React from "react";

const Appointments = ({appointments, patients, employees, addAppointment}) => {
    const day = Array.from({length: 28}, (_, i) => i + 1)
                        .map(day => <option key={day}>{day}</option>)
    const time = Array.from({length: 11}, (_, i) => i + 8)
                        .map(day => <option key={day}>{day}</option>)
    const patientList = patients.map(patient => {
        return <option key={patient.id} value={patient.id} >{patient.name} {patient.surname}</option>
    })
    const dentistList = employees.filter(employee => employee.occupation === "Dentist")
        .map(dentist => {
            return <option key={dentist.id} value={dentist.id}>{dentist.name} {dentist.surname}</option>
        });
    const assistentList = employees.filter(employee => employee.occupation === "Assistent")
    .map(assistent => {
        return <option key={assistent.id} value={assistent.id}>{assistent.name} {assistent.surname}</option>
    });

    
    return (
        <div>
            <form onSubmit={addAppointment}>
                Make new appointment:<br />
                <br />
                Day: <select name="day">{day}</select>&nbsp;
                Time: <select name="time">{time}</select>&nbsp;
                Patient: <select name="patient">{patientList}</select>&nbsp;
                Dentist: <select name="dentist">{dentistList}</select>&nbsp;
                Assistent: <select name="assistent">
                    <option value="none">--</option>
                    {assistentList}
                </select>&nbsp;
                <button>Make appointment</button>
            </form>
        </div>
    );
}

export default Appointments;