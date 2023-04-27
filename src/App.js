import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <Routes>
          <Route path="/student" element={<Student students={students} setStudents={setStudents}  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
