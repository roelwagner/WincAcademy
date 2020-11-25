import React from "react";
import List from "./List";

function ShoppingCart(props){

    return(
        <div>
            <List items={props.list} handleClickGroceryItem={props.handleClickGroceryItem} />
        </div>
    )
}

export default ShoppingCart;