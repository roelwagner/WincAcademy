import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
    const [movies] = useContext(MovieContext);
    return(
        <div className="navbar">
            <h3 className="name">Roel</h3>
    <p className="personallist">List of Movies: {movies.length}</p>
        </div>
    )
}

export default Nav;