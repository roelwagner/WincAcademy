import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

const AppointmentInMonth = ({ id, time, patient, dentist, removeAppointment, moveAppointment }) => {
  return(
    <div className={"appointment " + (dentist.sick ? 'sick' : '')}>
      <span className="time">{format_time(time)}</span>
      <span className="patient">{patient.name} {patient.surname} </span>
      <span>
        <i className="fas fa-trash-alt" id={id} onClick={removeAppointment}></i>&nbsp;
        <i className="fas fa-edit" id={id} onClick={moveAppointment}></i>
      </span>
    </div>
  );
}

export default AppointmentInMonth