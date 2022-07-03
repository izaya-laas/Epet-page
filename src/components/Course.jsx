import React from "react";
import { AiOutlineInsertRowLeft } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Error404 from "../pages/Error-404";

const Course = () => {
  const { curso } = useParams();
  let courseNumber = parseInt(curso);

  if (isNaN(courseNumber)) return <Error404 />;
  if (courseNumber < 1 || courseNumber > 7) return <Error404 />;

  return (
    <>
      <h1>Curso numero {curso}</h1>
    </>
  );
};

export default Course;
