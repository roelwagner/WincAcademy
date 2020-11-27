import React from "react";
import List from "./List";
import InputField from "./InputField";

function GroceryList(props){

    return(
        <div className="list grocerylist">
            <header className="contentheader">
                <h2>Boodschappenlijst</h2>
                <InputField addProduct={props.addProduct}/>
            </header>
            <List items={props.list} handleClickGroceryItem={props.handleClickGroceryItem} />
        </div>
    )
}

export default GroceryList;