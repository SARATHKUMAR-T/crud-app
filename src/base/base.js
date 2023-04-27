import React from "react";

const Base = ({ title, description, children }) => {
  return (
    <div
      className="main-component base-component
        flex   justify-center text-center items-center  mx-auto px-6 py-8 min-h-screen"
    >
      <header>
        <h1
          className="heading  font-sans text-5xl
           font-bold"
        >
          {title}
        </h1>
      </header>

      <main className="main-segment ">
        <h2 className="font-bold text-2xl">{description}</h2>
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Base;
