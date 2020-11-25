import React from "react";

const ListItem = (props) => {

    return(
        <li
            id={props.item.id}
            className="list-item"
            value={props.item.title}
            onClick={props.handleClickGroceryItem}
        >{props.item.title}
        </li>
    )
}

export default ListItem;