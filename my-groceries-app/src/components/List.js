import React from "react";
import ListItem from "./ListItem";

function List(props){

    console.log(Object.values(props.items))


    const shoppingList = Array.from(props.items).map(item => {
        return <ListItem 
                    key={item.id} 
                    item={item} 
                    handleClickGroceryItem={props.handleClickGroceryItem} 
                />
    })

    return(
        <ul>
            {shoppingList}
        </ul>
    )
}

export default List;