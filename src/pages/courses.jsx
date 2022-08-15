import React from "react";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import Main from "../components/Main";
import { Link } from "react-router-dom";
import { useStyles } from "../hooks/useStyles";

const COURSES = [
  { year: "1er año", index: 1 },
  { year: "2do año", index: 2 },
  { year: "3er año", index: 3 },
  { year: "4to año", index: 4 },
  { year: "5to año", index: 5 },
  { year: "6to año", index: 6 },
  { year: "7mo año", index: 7 },
];

const Courses = () => {
  const { borderStyles, buttonStyles } = useStyles();
  return (
    <Main>
      <Title
        className={`text-center mb-10 pb-2 border-b-2 border-dotted ${borderStyles}`}
      >
        Cursos
      </Title>
      <Paragraph>Vea los contenidos y objetivos de cada curso</Paragraph>
      <section className="desktop:w-3/4 desktop:mx-auto">
        {COURSES.map((course) => {
          return (
            <Link to={`${course.index}`} key={course.index}>
              <div
                className={` m-4 p-4 rounded-2xl border-b overflow-hidden ${buttonStyles}`}
              >
                <Paragraph className="rounded-2xl text-left ">
                  {course.year}
                </Paragraph>
              </div>
            </Link>
          );
        })}
      </section>
    </Main>
  );
};

export default Courses;
