import React from "react";
import Title from "../components/Title";
const cursos = [1, 2, 3, 4, 5, 6, 7];

const Courses = () => {
  return (
    <>
      <Title>Cursos</Title>
      {cursos.map((el) => {
        return (
          <div key={el} className="bg-blue-300 m-4 p-4 rounded-2xl">
            <h2 className="text-left text-2xl">Curso numero {el}</h2>
          </div>
        );
      })}
    </>
  );
};

export default Courses;
