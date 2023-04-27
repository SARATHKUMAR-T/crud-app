import { Switch, useState } from "react";
import { BrowserRouter as Route } from "react-router-dom";
import "./App.css";
import data from "./data/data";
// import UpdateStudent from "./Components/updateStudent";
// import Base from './base/base';
import Student from "./Components/student";
// import Addstudent from "./Components/Addstudent";

function App() {
  const [students, setStudents] = useState(data);
  return (
    <div className="App min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <Route exact path="/">
        <Switch>
          <Student Students={students} setStudents={setStudents} />
        </Switch>
      </Route>
    </div>
  );
}

export default App;
