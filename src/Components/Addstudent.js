import React, { useState } from "react";
// import Student from "./student";

function Addstudent({ students, setStudents }) {
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setQualification] = useState("");

  const createStudents = () => {
    const newStudents = {
      name: name,
      batch: batch,
      gender: gender,
      qualification: qualification,
    };
    setStudents([...students, newStudents]);
    console.log(setStudents);
  };

  return (
    <div className="input-container flex justify-center items-center p-12 w-full  ">
      <div className="flex flex-col items-center justify-center space-x-5 mb-8 m-3 space-y-8 rounded-xl w-lg px-16 py-16  bg-slate-100 ">
        <input
          className="border-2 w-full ml-5  border-slate-300 rounded-sm pl-3 font-serif "
          type="text"
          placeholder="Enter Name"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <input
          className="border-2 w-full ml-5  border-slate-300 rounded-sm pl-3 font-serif "
          type="text"
          placeholder="Enter Batch"
          onChange={e => setBatch(e.target.value)}
          value={batch}
        />
        <input
          className="border-2 w-full ml-5  border-slate-300 rounded-sm pl-3 font-serif"
          type="text"
          placeholder="Enter Gender"
          onChange={e => setGender(e.target.value)}
          value={gender}
        />
        <input
          className="border-2 w-full ml-5  border-slate-300 rounded-sm pl-3 font-serif"
          type="text"
          placeholder="Enter Qualification "
          onChange={e => setQualification(e.target.value)}
          value={qualification}
        />

        <button className="bg-green-700 rounded-lg p-2 w-full text-white font-bold hover:bg-green-500
        duration-300 transition-all hover:text-black" onClick={createStudents}>
          Add Students
        </button>
      </div>
    </div>
  );
}

export default Addstudent;
