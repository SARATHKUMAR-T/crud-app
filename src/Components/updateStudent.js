import React, { useState } from "react";

function UpdateStudent({ students, setStudents, editIdx }) {
//   const editStudent = students[editIdx];
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setQualification] = useState("");

//   useEffect(() => {
//     setName(editStudent.name);
//     setBatch(editStudent.batch);
//     setGender(editStudent.gender);
//     setQualification(editStudent.qualification);
//   }, [editStudent]);


  function updateStudent() {
    const updatedObject = {
      name: name,
      batch: batch,
      gender: gender,
      qualification: qualification,
    };
    students[editIdx] = updatedObject;
    setStudents([...students]);
  }

  return (
    <div>
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

          <button
            className="bg-green-700 rounded-lg p-2 w-full text-white font-bold hover:bg-green-500
        duration-300 transition-all hover:text-black"
            onClick={updateStudent}
          >
            Update Students
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateStudent;
