import React from "react";
import Base from "../Base/Base";

const DashBoard = () => {
  return (
    <Base title={"Welocome to B45WD"} description={"This student list website"}>
      <div className="container">
        <div className="bg-gray-200 flex flex-col items-center gap-4 text-gray-700 font-semibold p-4 min-h-screen rounded-lg shadow-xl">
          <p className="mt-4 text-4xl">Hi Geeks !</p>
          <h2 className="text-2xl mt-6 text-green-500">
            Reputed Edtech platform for Vernacular Languages
          </h2>
          <div className="max-w-md">
            <p className="mt-6">
              GUVI is an IIT-M & IIM-A incubated Ed-tech company that focuses on
              providing personalized learning solutions for its learners right
              from online learning, upskilling & recruitment opportunities in
              world-class quality. And, bestow tech-skills with the comfort of
              your native language.
            </p>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default DashBoard;
