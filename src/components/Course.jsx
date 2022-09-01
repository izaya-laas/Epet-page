import React from "react";
import { Link, useParams } from "react-router-dom";
import Error404 from "../pages/Error-404";
import courseData from "../db/courses-data.json";
import Title from "../components/Title";
import Main from "../components/Main";
import { useStyles } from "../hooks/useStyles";
import Subtitle from "./Subtitle";
import Carrousel from "./Carrousel";

const Course = () => {
  const { curso } = useParams();
  let courseNumber = parseInt(curso);

  if (isNaN(courseNumber)) return <Error404 />;
  if (courseNumber < 1 || courseNumber > 7) return <Error404 />;

  const currentCourse = courseData.filter(
    (course) => course.index === courseNumber
  )[0].coursePage;

  const { borderStyles, subtitleStyles, linkStyles } = useStyles();

  return (
    <>
      <Main>
        <Title
          className={`text-center mb-10 pb-2 border-b-2 border-dotted ${borderStyles}`}
        >
          {currentCourse.title}
        </Title>
        <section>
          <div className="grid tablet:grid-cols-2 gap-x-8">
            <article className="my-6">
              <Subtitle className={`${subtitleStyles} mb-2`}>
                Introduccion
              </Subtitle>
              <p>{currentCourse.introduction}</p>
            </article>
            <article className="my-6">
              <Subtitle className={`${subtitleStyles} mb-2`}>
                Objetivos
              </Subtitle>
              <p>{currentCourse.introduction}</p>
            </article>
          </div>
          <article className="my-6">
            <Subtitle className={`${subtitleStyles} mb-2`}>Imagenes</Subtitle>
            <Carrousel
              className="h-60 tablet:h-72 desktop:h-96 tablet:mx-auto tablet:aspect-video"
              images={currentCourse.images}
            />
          </article>
          <article className="my-6">
            <Subtitle className={`${subtitleStyles} mb-2`}>Materias</Subtitle>
            <table className="border-spacing-4 border-collapse mx-auto my-2 border border-black">
              <thead>
                <tr>
                  <th className="border border-black min-w-[150px] tablet:min-w-[250px]">
                    Materias
                  </th>
                  <th className="min-w-[250px] tablet:min-w-[250px]">
                    Profesor
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentCourse.subjects.map((subject) => (
                  <tr
                    className="border border-black"
                    key={self.crypto.randomUUID()}
                  >
                    <td className="border p-2 border-black">{subject.topic}</td>
                    <td className="p-2"> {subject.professor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        </section>
        <aside>
          <p>¿Aún no estas inscripto?</p>
          <Link className={linkStyles} to="/ingresantes">
            Inscribete
          </Link>
        </aside>
      </Main>
    </>
  );
};

export default Course;
