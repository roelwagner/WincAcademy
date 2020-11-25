import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increse = this.increse.bind(this);
        this.decrese = this.decrese.bind(this);
    }

    increse(){
      this.setState(prevState => {
          return {
            count: prevState.count + 1,
          }
      })
    }
    decrese(){
      this.setState(prevState => {
          return {
            count: prevState.count - 1,
          }
      })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increse}>Increse!</button><br />
                <button onClick={this.decrese}>Decrese!</button>
            </div>
        )
    }
}

export default App
