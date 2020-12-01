import React from "react";
import List from "./List";

function ShoppingCart(props){
    return(
        <div className="list shoppingcartlist">
            <header className="contentheader">
                <h2>Winkelmand</h2>
                <button className="leegwinkelwagen" onClick={props.emptyCart}>Leeg De Winkelmand</button>
            </header>
            <List items={props.list} readonly={props.readonly}/>
        </div>
    )
}

export default ShoppingCart;