// import React, { useState } from "react";
import Base from "../base/base";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

export const fieldValidationSchema = yup.object({
  name: yup.string().required("please fill the name"),
  batch: yup
    .string()
    .required("please fill the batch")
    .min(5, "please enter valid batch name"),
  qualification: yup.string().required("please fill in student qualification"),
  gender: yup.string().required("please enter Gender"),
});

function AddStudents({ students, setStudents }) {
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        batch: "",
        qualification: "",
        gender: "",
      },

      validationSchema: fieldValidationSchema,
      onsubmit: newStudentData => {
        createStudent(newStudentData);
        console.log(newStudentData);
      },
    });

  const history = useHistory();
  // const [name, setName] = useState("");
  // const [batch, setBatch] = useState("");
  // const [gender, setGender] = useState("");
  // const [qualification, setQualification] = useState("");

  const createStudent = async newStudentData => {
    // creating object from input states
    // const newStudents = {
    //   name: name,
    //   batch: batch,
    //   qualification: qualification,
    //   gender: gender,
    // };

    const response = await fetch(
      "https://644b33c017e2663b9deab94b.mockapi.io/students",
      {
        method: "POST",
        body: JSON.stringify(newStudentData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setStudents([...students, data]);
    history.push("/students");
  };

  return (
    <Base
      title={"Add New Student"}
      description={"We can able to add new students data here"}
    >
      <div className="edit p-4 flex items-center justify-center pr-8  ">
        <form onSubmit={handleSubmit}>
        <div className="bg-gray-200 flex items-end flex-col rounded-lg shadow-xl p-8 px-16 gap-8 w-94">
          <div className="flex gap-2">
            <label for="name" className="pt-2">
              Name:
            </label>
            <input
              className="rounded-md  p-2 outline-none focus:ring-inset duration-300 transition-all focus:ring-[#ff922b] focus:ring-4"
              placeholder="Enter Name"
              type="text"
              id="name"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <div className="text-red-500">
              {touched.name && errors.name ? errors.name : ""}
            </div>
          </div>
          <div className="flex gap-2">
            <label for="batch" className="pt-2">
              Batch:
            </label>
            <input
              className="rounded-md  p-2 outline-none focus:ring-inset duration-300 transition-all focus:ring-[#ff922b] focus:ring-4"
              placeholder="Enter Batch"
              type="text"
              id="batch"
              value={values.batch}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="text-red-500">
              {touched.name && errors.name ? errors.name : ""}
            </div>
          </div>
          <div className="flex gap-2">
            <label for="gender" className="pt-2">
              Gender:
            </label>
            <input
              className="rounded-md  p-2 outline-none focus:ring-inset duration-300 transition-all focus:ring-[#ff922b] focus:ring-4"
              placeholder="Enter Gender"
              type="text"
              id="gender"
              value={values.gender}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <div className="text-red-500">
              {touched.name && errors.name ? errors.name : ""}
            </div>
          </div>
          <div className="flex gap-2">
            <label for="qualification" className="pt-2">
              Qualification:
            </label>
            <input
              className="rounded-md  p-2 outline-none focus:ring-inset duration-300 transition-all focus:ring-[#ff922b] focus:ring-4"
              placeholder="Enter Qualifiaction"
              type="text"
              id="qualification"
              value={values.qualification}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <div className="text-red-500">
              {touched.name && errors.name ? errors.name : ""}
            </div>
          </div>

          <button
            className="mx-auto mt-4 p-2 rounded-md shadow-xl w-1/2 bg-green-600 duration-300 transition-all mb-2 hover:scale-105 hover:text-white"
            type="submit"
          >
            Create Student
          </button>
        </div>
        </form>
      </div>
    </Base>
  );
}

export default AddStudents;
