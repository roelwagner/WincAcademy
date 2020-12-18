import React, {useState} from "react";

const AddMovie = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const updateName = e => {
        setName(e.target.value);
    }
    const updatePrice = e => {
        setPrice(e.target.value);
    }

    const addMovie = e => {
        e.preventDefault();
        
    }

    return(
        <form>
            <input type="text" name="name" onChange={updateName}/>
            <input type="text" name="price" onChange={updatePrice} />
            <button>Submit</button>
        </form>
    )
}

export default AddMovie;