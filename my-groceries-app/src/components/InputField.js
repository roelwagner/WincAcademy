import React from "react";

const InputField = (props) => {

        return(
            <div>
                <input type="text" name="newProduct" />
                &nbsp;
                <button onClick={props.addProduct}>Voeg item toe</button>
            </div>
        )
}

export default InputField;