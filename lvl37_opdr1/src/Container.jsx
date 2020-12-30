import React from "react";
import App from "./App";
import generateRandomAppointments from "./utils";
import {nanoid} from "nanoid";

class Container extends React.Component{
    constructor(){
        super();
        const randomAppointments = generateRandomAppointments(150);
        const dentists = [...new Set(randomAppointments.map(item => item.dentist))];
        const assistents = [...new Set(randomAppointments.map(item => item.assistent))];
        const patients = [...new Set(randomAppointments.map(item => item.patient))];
        const employees = [...dentists, ...assistents];
        this.state = {
            appointments: randomAppointments,
            employees: employees,
            patients: patients,
        }
    }

    addEmployee = event => {
        let name = event.target.name.value
        let surname = event.target.surname.value
        const birthyear = event.target.birthyear.value
        const occupation = event.target.occupation.value
        const phone = event.target.phone.value
        const email = event.target.email.value
        if(name===""){name="John"}
        if(surname===""){surname="Doe"}
            const newEmployee = {
                id: nanoid(),
                name: name,
                surname: surname,
                occupation: occupation,
                phone: phone,
                email: email,
                birthyear: birthyear,
                sick: false,
            };
            const newEmployeeList = [newEmployee, ...this.state.employees];
            this.setState({employees: newEmployeeList})
        event.preventDefault();
    }
    addPatient = event => {
        const name = event.target.name.value
        const surname = event.target.surname.value
        const birthyear = event.target.birthyear.value
        const phone = event.target.phone.value
        const email = event.target.email.value
        if(name !== ""){
            if(surname !== ""){
                const newPatient = {
                    id: nanoid(),
                    name: name,
                    surname: surname,
                    phone: phone,
                    email: email,
                    birthyear: birthyear,
                    sick: false,
                };
                const newPatientList = [newPatient, ...this.state.patients];
                this.setState({patients: newPatientList})
            }
        }
        event.preventDefault();
    }

    makeEmployeeSick = event => {
        const ID = event.target.parentElement.parentElement.id;
        const target = [...this.state.employees].find(employee => employee.id === ID);
        const newList = [...this.state.employees].map(employee => {
            if(employee === target){
                employee.sick = !employee.sick;
            }
            return employee;
        })
        this.setState({employees: newList})
    }

    filterSickPatients = (person) => {
        const newList = [...this.state.appointments].filter(app => app.patient !== person)
        this.setState({appointments: newList})
    }

    makePatientSick = event => {
        const ID = event.target.parentElement.parentElement.id;
        const target = [...this.state.patients].find(patient => patient.id === ID);
        const newList = [...this.state.patients].map(patient => {
            if(patient === target){
                patient.sick = !patient.sick;
            }
            return patient;
        })
        this.setState({patient: newList})
        this.filterSickPatients(target);
    }

    addAppointment = event => {
        const patient = [...this.state.patients].find(patient => patient.id === event.target.patient.value);
        const dentist = [...this.state.employees].find(dentist => dentist.id === event.target.dentist.value);
        const assistent = [...this.state.employees].find(assistent => assistent.id === event.target.assistent.value);
        const day = parseInt(event.target.day.value);
        const time = parseInt(event.target.time.value);
        const newAppointment = {id: nanoid(), day: day, time: time, patient: patient, dentist: dentist, assistent: assistent};
        const matchDentist = [...this.state.appointments].find(app => {
            return app.day === day && app.time === time && app.dentist === dentist
        });
        const matchAssistent = [...this.state.appointments].find(app => {
            if(assistent !== undefined){
                return app.day === day && app.time === time && app.assistent === assistent
            }
            return false
        })
        if(matchDentist && matchAssistent){
            alert("Dentist and Assistent not available");
        } else if(matchDentist){
            alert("Dentist not available");
        } else if(matchAssistent){
            alert("Assistent not available");
        } else{
            const newList = [newAppointment, ...this.state.appointments];
            this.setState({appointments: newList});
        }
        event.preventDefault();
    }

    removeAppointment = event => {
        const appointment = [...this.state.appointments].find(app => app.id === event.target.id);
        const newList = [...this.state.appointments].filter(app => app !== appointment);
        this.setState({appointments: newList})
    }

    moveAppointment = event => {
        let dayValidator = false;
        let timeValidator = false;
        let day = 0;
        let time = 0;
        while(!dayValidator){
            day = parseInt(prompt("set a new day between 1 to 28"));
            if(day > 0 && day < 29){
                dayValidator = true
            }
        }
        while(!timeValidator){
            time = parseInt(prompt("set a new time between 8 and 18"));
            if(time > 7 && time < 19){
                timeValidator = true
            }
        }
        const appointmentToDelete = [...this.state.appointments].find(app => app.id === event.target.id);
        const newAppointment = {id: appointmentToDelete.id, day: day, time: time, patient: appointmentToDelete.patient, dentist: appointmentToDelete.dentist, assistent: appointmentToDelete.assistent};

        const matchDentist = [...this.state.appointments].find(app => {
            return app.day === day && app.time === time && app.dentist === appointmentToDelete.dentist
        });
        const matchAssistent = [...this.state.appointments].find(app => {
                return app.day === day && app.time === time && app.assistent === appointmentToDelete.assistent
        })
        if(matchDentist && matchAssistent){
            alert("Dentist and Assistent not available");
        } else if(matchDentist){
            alert("Dentist not available");
        } else if(matchAssistent){
            alert("Assistent not available");
        } else{
            const appointmentRemoved = [...this.state.appointments].filter(app => app !== appointmentToDelete);
            const newList = [newAppointment, ...appointmentRemoved];
            this.setState({appointments: newList});
        }
    }
    render(){
        return(
            <div>
                <App 
                    appointments={this.state.appointments}
                    employees={this.state.employees}
                    patients={this.state.patients}
                    addPatient={this.addPatient}
                    makePatientSick={this.makePatientSick}
                    addEmployee={this.addEmployee}
                    makeEmployeeSick={this.makeEmployeeSick}
                    addAppointment={this.addAppointment}
                    removeAppointment={this.removeAppointment}
                    moveAppointment={this.moveAppointment}
                />
            </div>
        )
    }
}

export default Container;