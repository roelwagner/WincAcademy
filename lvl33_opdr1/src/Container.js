import React from "react";
import Header from "./components/Header";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

class Container extends React.Component{
    constructor(){
        super()
        this.state = {
            groceryItems: [
                {id: 1, title: "Appels", amount: 1},
                {id: 2, title: "Bananen", amount: 1},
                {id: 3, title: "Brood", amount: 1},
            ],
            shoppingListItems: [
            ],
        }
    }

    addAmountToItem = element => {
        const newShoppingList = [...this.state.shoppingListItems].map(product => {
            if(element.id === product.id){
                product.amount++
            }
            return product
        })
        this.setState({shoppingListItems: newShoppingList})
    }

    handleClickGroceryItem = event => {
        const result = this.state.groceryItems.find( ({title}) => title === event.target.getAttribute("value"));
        const match = this.state.shoppingListItems.some(item => item === result);
        
        if(match){
            this.addAmountToItem(result)
        }else{
            this.setState(prevState => {
                result.amount = 1;
                const extendedShoppingListItems = [...prevState.shoppingListItems, result]
                return {
                    shoppingListItems: extendedShoppingListItems,
                }
            })
        }
    }

    emptyCart = () => {
        this.setState({
            shoppingListItems: [],
        })
    }
    addProduct = event => {
        const product = event.target.previousSibling.previousSibling.value;
        if(product !== "" && product !== null){
            this.setState(prevState => {
                const productID = prevState.groceryItems.length + 1;
                const productObject = {id: productID, title: product,};
                const updatedGroceryList = [productObject, ...prevState.groceryItems];
                return{
                    groceryItems: updatedGroceryList,
                    shoppingListItems: prevState.shoppingListItems,
                }
            })
        } 
    }

    render(){
        return(
            <div className="wrapper">
                <Header />
                <div className="content">
                    <GroceryList 
                        list={this.state.groceryItems} 
                        handleClickGroceryItem={this.handleClickGroceryItem} 
                        addProduct={this.addProduct}
                    />
                    <ShoppingCart 
                        list={this.state.shoppingListItems} 
                        emptyCart={this.emptyCart}
                        readonly={true}
                    />
                </div>
            </div>
        )
    }
}

export default Container;