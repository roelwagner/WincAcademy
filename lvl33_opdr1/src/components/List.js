import React from "react";
import ListItem from "./ListItem";

function List(props){

    const list = Array.from(props.items).map(item => {
        return <ListItem 
                    key={item.id} 
                    item={item}
                    handleClickGroceryItem={props.handleClickGroceryItem}
                    readonly={props.readonly}
                />
    })

    return(
        <ul>    
            {list}
        </ul>
    )
}

export default List;