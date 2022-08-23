import React, { useState } from "react";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import Main from "../components/Main";
import { Link } from "react-router-dom";
import { useStyles } from "../hooks/useStyles";

const COURSES = [
  {
    year: "1er año",
    index: 1,
    text: "Objetivo: introducir a los nuevos alumnos a la nueva vida escolar, formar la curiosidad",
  },
  {
    year: "2do año",
    index: 2,
    text: "Objetivo: Aprender electricidad junto a nuevos valores escolares ",
  },
  {
    year: "3er año",
    index: 3,
    text: "Creacion de proyecto con logica de rele y temporizadores",
  },
  {
    year: "4to año",
    index: 4,
    text: "Mejora en las matematicas del alumno y logica a la hora de resolver un problema matematico sabiendo donde lo aplicara",
  },
  {
    year: "5to año",
    index: 5,
    text: "Creacion de proyectos escolares basados en la electricidad y logica de rele",
  },
  { year: "6to año", index: 6, text: "Atomatizaciones industriales junto a " },
  {
    year: "7mo año",
    index: 7,
    text: "Realizar trabajos reales para formar mas al alumno y llevarlo a problematicas del mundo real",
  },
];

const Courses = () => {
  const [CurrentAvanico, setCurrentAvanico] = useState(0);
  const { borderStyles, buttonStyles, courseCardStyles, linkStyles } =
    useStyles();

  console.log(CurrentAvanico);

  const eventClick = (e) => {
    if (e.target.matches('div[data-year="1"] *')) return setCurrentAvanico(1);
    if (e.target.matches('div[data-year="2"] *')) return setCurrentAvanico(2);
    if (e.target.matches('div[data-year="3"] *')) return setCurrentAvanico(3);
    if (e.target.matches('div[data-year="4"] *')) return setCurrentAvanico(4);
    if (e.target.matches('div[data-year="5"] *')) return setCurrentAvanico(5);
    if (e.target.matches('div[data-year="6"] *')) return setCurrentAvanico(6);
    if (e.target.matches('div[data-year="7"] *')) return setCurrentAvanico(7);

    if (!e.target.matches("div[data-year] *")) return setCurrentAvanico(0);
  };

  return (
    <div className="w-screen " onClick={eventClick}>
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
                className="mt-4 relative "
              >
                <div
                  className={`p-4 rounded-2xl border-b ${buttonStyles} relative z-10`}
                >
                  <Paragraph className="rounded-2xl text-left">
                    {course.year}
                  </Paragraph>
                </div>
                <div
                  className={` ${courseCardStyles} pt-8 pb-2 px-2 transition-opacity -translate-y-6 duration-1000 rounded-2xl ${
                    course.index === CurrentAvanico
                      ? "visible"
                      : "invisible opacity-0 absolute"
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
