import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import Appointments from "./Appointments";
import Employees from "./Employees";
import Patients from "./Patients";

const Home = ({
        appointments, 
        employees, 
        addEmployee, 
        makeEmployeeSick, 
        patients, 
        makePatientSick, 
        addPatient,
        addAppointment,
    }) => {
    return(
        <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/appointments">Appointments</Link>
                    </li>
                    <li>
                        <Link to="/patients">Patients</Link>
                    </li>
                    <li>
                        <Link to="/employees">Dentists / Assistents</Link>
                    </li>
                </ul>
            </nav>
            <main>
            <Switch>
            <Route path="/appointments">
                    <Appointments 
                        appointments={appointments}
                        patients={patients}
                        employees={employees}
                        addAppointment={addAppointment}
                    />
                </Route>
                <Route path="/patients">
                    <Patients 
                        patients={patients}
                        addPatient={addPatient}
                        makePatientSick={makePatientSick}
                    />
                </Route>
                <Route path="/employees">
                    <Employees
                        employees={employees}
                        addEmployee={addEmployee}
                        makeEmployeeSick={makeEmployeeSick}
                    />
                </Route>
            </Switch>
            </main>
        </div>
    </Router>
    )
}

export default Home;