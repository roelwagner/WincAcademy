import React from "react";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

class Container extends React.Component{
    constructor(){
        super()
        this.state = {
            groceryItems: [
                {id: 1, title: "Appels",},
                {id: 2, title: "Bananen",},
                {id: 3, title: "Brood",},
                {id: 4, title: "Kaas",},
                {id: 5, title: "Chips",},
                {id: 6, title: "Salami",},
                {id: 7, title: "Kattenvoer",},
            ],
            shoppingListItems: [
                {id: 1, title: "Appels",},
            ],
        }
    }

    handleClickGroceryItem = (event) => {
        const result = this.state.groceryItems.find( ({title}) => title === event.target.getAttribute("value"));

        this.setState(prevState => {
            return {
                shoppingListItems: prevState.shoppingListItems.push(result)
            }
        })
    }

    render(){
        return(
            <div>
                <GroceryList list={this.state.groceryItems} handleClickGroceryItem={this.handleClickGroceryItem} />
                <ShoppingCart list={this.state.shoppingListItems} handleClickGroceryItem={this.handleClickGroceryItem} />
            </div>
        )
    }
}

export default Container;