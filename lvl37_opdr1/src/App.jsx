import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Calendar from "./components/Calender/Calendar";
import Day from "./components/Day/Day";


const App = ({appointments, employees, addEmployee, makeEmployeeSick, patients, makePatientSick, addPatient, addAppointment, removeAppointment, moveAppointment}) => {
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar view</Link>
            </li>
            <li>
              <Link to="/day">Day view</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/calendar">
              <Calendar appointments={appointments} removeAppointment={removeAppointment} moveAppointment={moveAppointment} />
            </Route>
            <Route path="/day">
              <Day appointments={appointments.filter(app => app.day === 1)} />
            </Route>
            <Route path="/">
              <Home 
                appointments={appointments}
                employees={employees}
                patients={patients}
                addPatient={addPatient}
                makePatientSick={makePatientSick}
                addEmployee={addEmployee}
                makeEmployeeSick={makeEmployeeSick}
                addAppointment={addAppointment}
              />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
