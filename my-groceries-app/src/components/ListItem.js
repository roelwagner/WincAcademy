import React from "react";

const ListItem = (props) => {

    const amount = "Hoeveelheid: " + props.item.amount;

    return(
        <li
            id={props.item.id}
            className="list-item"
            value={props.item.title}
            onClick={props.handleClickGroceryItem}
        >
            <span>
                {props.item.title}
            </span>
            <span>
                {props.readonly ? amount : null}
            </span>
        </li>
    )
}

export default ListItem;