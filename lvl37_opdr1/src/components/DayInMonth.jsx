import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

const DayInMonth = ({ appointments, removeAppointment, moveAppointment }) => {
  const appointmentsJSX = appointments.map(({ time, patient, dentist, id}, index) => {
    return(
      <AppointmentInMonth time={time} patient={patient} dentist={dentist} key={index} id={id} removeAppointment={removeAppointment} moveAppointment={moveAppointment} />
    )
  });
  const sortedAppointmentsJSX = appointmentsJSX.sort((a,b) => a.props.time - b.props.time);
  return <div className="day">{sortedAppointmentsJSX}</div>;
};

export default DayInMonth;