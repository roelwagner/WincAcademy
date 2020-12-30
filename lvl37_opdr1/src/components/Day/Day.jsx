import React from "react";
import "./Day.css";
import AppointmentInDay from "../AppointmentInDay";

const Day = ({ appointments }) => {
  const appointmentsJSX = appointments.map(
    ({ time, patient, dentist, assistent }, index) => (
      <AppointmentInDay
        time={time}
        patient={patient}
        dentist={dentist}
        assistent={assistent}
        key={index}
      />
    )
  );
  const sortedAppointmentsJSX = appointmentsJSX.sort((a,b) => a.props.time - b.props.time);
  return <ul className="dayview">{sortedAppointmentsJSX}</ul>;
};

export default Day;