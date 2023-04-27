import React, { useState } from "react";
import Base from "../base/base";
import Addstudent from "./Addstudent";
import UpdateStudent from "./updateStudent";

function Student({students,setStudents}) {
  
 const[editIdx,setEditIdx]=useState("")
  // Delete Function

  const deleteFunction = idx => {
    const final = students.filter((store, index) => idx !== index);

    setStudents(final);
  };



  return (
    <Base title={"WELCOME GEEKS"} 
    description={"STUDENTS DATABASE"}>
      {/* Child operation */}
      {/* Add */}
      <Addstudent setStudents={setStudents} students={students} />
      <br/>

      {/* updation  */}
      <UpdateStudent setStudents={setStudents} students={students}
      editIdx={editIdx}/>
      <br/>

      {/* Card Section */}
      <div
        className=" mx-auto card-container grid grid-cols-4 gap-16  justify-items-center 
     items-center 
      "
      >
        {students.map((stud, idx) => (
          <div
            className="card w-full p-6 bg-slate-100 rounded-lg  border-2 duration-300 transition-all hover:-translate-y-2"
            key={idx}
          >
            <div className="content flex flex-col gap-4 mb-8">
              <h3 className="font-bold text-md">NAME: {stud.name}</h3>
              <p className="font-bold text-md">BATCH: {stud.batch}</p>
              <p className="font-bold text-md">GENDER: {stud.gender}</p>
              <p className="font-bold text-md">
                Qualification:{stud.qualification}
              </p>
            </div>
            <div className="control flex flex-col items-center    gap-4 ">
              {/* Add Button */}
              <button
                className="border-2 bg-blue-700 rounded-lg p-2 text-white w-64
               duration-300 transition-all hover:opacity-70  hover:text-black "
               onClick={()=>setEditIdx(idx)}
              >
                Edit
              </button>
              {/* delete button */}
              <button
                className="border-2 bg-red-700 rounded-lg text-white p-2 w-64
               duration-300 transition-all hover:opacity-70 hover:text-black"
                onClick={() => deleteFunction(idx)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </Base>
  );
}

export default Student;
