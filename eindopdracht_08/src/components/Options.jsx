import React from "react";

const Options = ({handleChange, difficult, fun, handleGraph, bargraph, handleData}) => {
    return(
        <div className="options">
            <span>
                <input 
                    type="checkbox" 
                    name="moeilijk" 
                    value="Moeilijk" 
                    onChange={handleChange}
                    checked={difficult}
                />
                <label htmlFor="moeilijk">Moeilijk</label>
            </span>
            <span>
                <input 
                    type="checkbox" 
                    name="leuk" 
                    value="Leuk"
                    onChange={handleChange}
                    checked={fun}
                />
                <label htmlFor="leuk">Leuk</label>
            </span>
            <button onClick={handleGraph}>{bargraph ? "Line-Chart" : "Bargraph"}</button>
            <button onClick={handleData}>Toggle Table</button>
        </div>
    );
}

export default Options;