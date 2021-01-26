import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllStudents from "./components/AllStudents";
import Student from "./components/Student";

const App = ({  data, 
                handleChange, 
                difficult, 
                fun, 
                bargraph, 
                handleGraph, 
                handleChangeActive, 
                handleData, 
                chart,
                sortBy, 
                sortData, 
                tableData,
                }) => {  

  const names = data[0].map(item => item.first_name);
    const students = names.map(student => {
      return <Route 
              path={`/${student}`} 
              key={`/${student}`}>
              <Student
                data={data} 
                tableData={tableData}
                name={`${student}`} 
                handleChange={handleChange}
                difficult={difficult}
                fun={fun}
                bargraph={bargraph}
                handleGraph={handleGraph}
                handleChangeActive={handleChangeActive}
                handleData={handleData}
                chart={chart}
                sortBy={sortBy}
                sortData={sortData}
              />
            </Route>
    })
  return (
    <Router>
      <main className="App">
        <Switch>
          <Route path="/" exact>
            <AllStudents 
              data={data}
              tableData={tableData}
              handleChange={handleChange}
              difficult={difficult}
              fun={fun}
              bargraph={bargraph}
              handleGraph={handleGraph}
              handleChangeActive={handleChangeActive}
              handleData={handleData}
              chart={chart}
              sortBy={sortBy}
              sortData={sortData}
            />
          </Route>
          {students}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
