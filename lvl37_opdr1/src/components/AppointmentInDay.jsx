import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

const AppointmentInDay = ({ time, patient, dentist, assistent }) => (
  <li className="appointment">
    <div className="time">{format_time(time)}</div>
    <div className="patient">Patiënt: {patient.name} {patient.surname}</div>
    <div className="dentist">Tandarts: {dentist.name} {dentist.surname}</div>
    <div className="assistent">Assistent: {assistent.name} {assistent.surname}</div>
  </li>
);

export default AppointmentInDay;