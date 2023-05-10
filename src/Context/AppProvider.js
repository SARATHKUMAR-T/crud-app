import React, { createContext ,useEffect,useState} from 'react'


const StudentCtx=createContext(null)



function AppProvider({children} ) {
 
    const [students, setStudents] = useState([]);

    useEffect(()=>{
      const getStudents = async () =>{
          const response = await fetch("https://644b33c017e2663b9deab94b.mockapi.io/students", {
            method:"GET",
          }); 
          const data = await response.json();
          if(data){
            setStudents(data)
          }
      }
      getStudents();
    }, [])
   
  return (
    <StudentCtx.Provider 
     value={{students,setStudents}}>
     {children}
    </StudentCtx.Provider>
  )
  
}

export default AppProvider

