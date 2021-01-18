import React from "react";
import App from "./App";
import data from "./data";

class Container extends React.Component{
    constructor(){
        super()
        this.state = {
            data: data,
        }
    }

    

    render(){
        return(
            <div>
                <App data={this.state.data} />
            </div>
        )
    }
}

export default Container;