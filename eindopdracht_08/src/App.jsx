import './App.css';
import Home from "./components/Home";

const App = ({ data }) => {

  return (
    <div className="App">
      <Home data={data} />
    </div>
  );
}

export default App;
