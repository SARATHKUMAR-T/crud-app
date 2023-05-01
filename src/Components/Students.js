// import React, { useState } from 'react'
import Base from '../base/base';
// import data from '../Data/data'
// import AddStudents from './AddStudents';
// import UpdateStudents from './UpdateStudents';
import { useHistory } from 'react-router-dom';

function Students({students, setStudents}) {
   const history = useHistory();
    // delete functionality
    const deleteStudent = async (studId)=>{
      
      const response = await fetch(`https://6427aa3446fd35eb7c437e60.mockapi.io/students/${studId}`, {
         method:"DELETE",
      });

      const data = await response.json()
     if(data){
       const remainingStudents = 
       students.filter((stud, idx)=> stud.id !== studId)
       
       setStudents(remainingStudents)
     }
    }

  
  return (
    <Base 
    title={"Students Dashboard"}
    description={"The page contains all students data"}
    >

         <div className='card-container sm:grid-cols-1  grid md:grid-cols-3 gap-12 p-6'>
            {students.map((stud, idx)=>(
                     <div className='card  rounded-lg bg-gray-200 shadow-xl p-6 duration-300 hover:scale-105' key={idx}>
                        <div className='content flex flex-col uppercase gap-2 mb-8'>
                     <h3><span className='text-gray-500'> Name :</span>{stud.name}</h3>
                     <p><span className='text-gray-500'>BATCH :</span> {stud.batch}</p>
                     <p><span className='text-gray-500'>GENDER :</span> {stud.gender}</p>
                     <p><span className='text-gray-500'>QUALIFICATION :</span> {stud.qualification}</p>
                     </div>

                     <div className='control flex flex-col items-center gap-4 '>
                     <button className='bg-green-600 rounded-md w-3/4 p-2 transition-all duration-300 hover:scale-105 hover:opacity-80 hover:text-white' onClick={()=>history.push(`/edit/${stud.id}`)}>EDIT</button>
                      
                     <button className='bg-red-500 rounded-md p-2 w-3/4 transition-all duration-300 hover:scale-105 hover:opacity-80 hover:text-white' onClick={()=>deleteStudent(stud.id)}>DELETE</button>
                     </div>
                    </div>
            ))}
     </div>

    </Base>
  )
}

export default Students
//crud
// read
//delete
//add
//update
// const arr = [1, 2, 3, 4, 5, 10, 15]

// function deleteFromArray(arr, num){
//   console.log(arr)
//   const removedArra = arr.filter((data, index)=>data != num)
//   console.log(removedArra)
// }

//deleteFromArray(arr, 4)