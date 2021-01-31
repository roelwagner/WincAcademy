import React from "react";

const Options = ({handleChange, difficult, fun, handleData}) => {
    return(
        <div className="options">
            <div className="optioncheckboxes">
            <span>
                <input 
                    type="checkbox" 
                    name="moeilijk" 
                    value="Moeilijk" 
                    onChange={handleChange}
                    checked={difficult}
                />
                <label htmlFor="moeilijk">&nbsp;Moeilijk</label>
            </span>
            <span>
                <input 
                    type="checkbox" 
                    name="leuk" 
                    value="Leuk"
                    onChange={handleChange}
                    checked={fun}
                />
                <label htmlFor="leuk">&nbsp;Leuk</label>
            </span>
            </div>
            <button onClick={handleData}>Bargraph</button>
            <button onClick={handleData}>Line-Chart</button>
            <button onClick={handleData}>Spreadsheet</button>
        </div>
    );
}

export default Options;