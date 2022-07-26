import React, { useState } from "react";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import Main from "../components/Main";
import { Link } from "react-router-dom";
import { useStyles } from "../hooks/useStyles";

import COURSES from "../db/courses-data.json";

const Courses = () => {
  const [CurrentAvanico, setCurrentAvanico] = useState(0);
  const { borderStyles, buttonStyles, courseCardStyles } = useStyles();

  const eventClick = (e) => {
    if (e.target.matches('div[data-year="1"] *')) {
      return CurrentAvanico === 1 ? setCurrentAvanico(0) : setCurrentAvanico(1);
    }
    if (e.target.matches('div[data-year="2"] *')) {
      return CurrentAvanico === 2 ? setCurrentAvanico(0) : setCurrentAvanico(2);
    }
    if (e.target.matches('div[data-year="3"] *')) {
      return CurrentAvanico === 3 ? setCurrentAvanico(0) : setCurrentAvanico(3);
    }
    if (e.target.matches('div[data-year="4"] *')) {
      return CurrentAvanico === 4 ? setCurrentAvanico(0) : setCurrentAvanico(4);
    }
    if (e.target.matches('div[data-year="5"] *')) {
      return CurrentAvanico === 5 ? setCurrentAvanico(0) : setCurrentAvanico(5);
    }
    if (e.target.matches('div[data-year="6"] *')) {
      return CurrentAvanico === 6 ? setCurrentAvanico(0) : setCurrentAvanico(6);
    }
    if (e.target.matches('div[data-year="7"] *')) {
      return CurrentAvanico === 7 ? setCurrentAvanico(0) : setCurrentAvanico(7);
    }
  };

  return (
    <div onClick={eventClick}>
      <Main>
        <Title
          className={`text-center mb-10 pb-2 border-b-2 border-dotted ${borderStyles}`}
        >
          Cursos
        </Title>
        <Paragraph>Vea los contenidos y objetivos de cada curso</Paragraph>
        <section className="desktop:w-3/4 desktop:mx-auto mt-4">
          {COURSES.map((course) => {
            return (
              <div
                key={course.index}
                data-year={course.index}
                className="mt-4 overflow-hidden rounded-2xl "
              >
                <div
                  className={`p-4 rounded-2xl border-b ${buttonStyles} relative z-10`}
                >
                  <Paragraph className="rounded-2xl text-left">
                    {course.year}
                  </Paragraph>
                </div>

                <div
                  className={` ${courseCardStyles} pt-8 pb-2 px-2 transition-tranform -translate-y-6 duration-700 rounded-2xl ${
                    course.index === CurrentAvanico
                      ? "visible"
                      : "invisible -translate-y-full absolute opacity-50 pt-0 scale-y-[10%] w-[calc(100%-32px)] tablet:w-full desktop:w-3/4"
                  }`}
                >
                  <p>
                    {course.text}{" "}
                    <span className="text-secondary-color font-bold">
                      {<Link to={`${course.index}`}>ver mas...</Link>}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      </Main>
    </div>
  );
};

export default Courses;
