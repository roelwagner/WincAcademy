import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ data, handleChangeActive, handleStudent, setAllActive }) => {
    
    const names = data[0].map(item => item);
    const students = names.map(student => {
        return  <span key={`${student.id}`} className="student__item">
                    <Link
                        to={`/${student.first_name}`}
                    >
                        <li onClick={handleStudent}>
                            {student.first_name}
                        </li>
                    </Link>
                    <input
                        className="student-checkbox"
                        type="checkbox"
                        name="active"
                        onChange={handleChangeActive}
                        checked={student.active}
                    />
                </span>
    })

    return(
        <nav className="main-nav">
            <Link to="/"><p className="home" onClick={setAllActive}>All Students</p></Link>
            <ul className="main-nav-ul">
                {students}
            </ul>
        </nav>
    )
}

export default Nav;