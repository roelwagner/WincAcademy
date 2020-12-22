import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <hr />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
