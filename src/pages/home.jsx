import React from "react";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import darkContext from "../context/darkContext";
import Carrousel from "../components/Carrousel";
// import introductionImage from "../epet-image.jpg";

const Home = () => {
  const { isDark } = useContext(darkContext);
  const [darkStyles, setDarkStyles] = useState({});

  const epetImages = [
    {
      image: "./src/assets/1.jpg",
      alt: "epet image",
    },
    {
      image: "./src/assets/2.jpg",
      alt: "epet image",
    },
    {
      image: "./src/assets/3.jpg",
      alt: "epet image",
    },
  ];
  const awardImages = [
    {
      image: "./src/assets/desafio-eco.jpg",
      alt: "desafio eco imagen",
      description: "Alumnos crean una wea que sirve ecologicamente",
      title: "desafio-eco",
    },
    {
      image: "./src/assets/proyecto-insur.jpg",
      alt: "Proyecto insur imagen",
    },
    {
      image:
        "./src/assets/reconocimiento-inet-transportador-para-personas-no-videntes.jpg",
      alt: "reconocimiento inet transportador para personas no videntes imagen",
    },
  ];

  const { gradientStartStyles, gradientEndStyles, buttonStyles } = darkStyles;

  useEffect(() => {
    if (isDark) {
      setDarkStyles({
        gradientStartStyles: "to-primary-color",
        gradientEndStyles: "from-primary-color to-third-color",
        buttonStyles: "bg-primary-color text-fourth-color",
      });
    } else {
      setDarkStyles({
        gradientStartStyles: "to-secondary-color",
        gradientEndStyles: "from-secondary-color to-fourth-color",
        buttonStyles: "bg-secondary-color text-primary-color",
      });
    }
  }, [isDark]);

  return (
    <>
      <div>
        <div className="home-background bg-cover bg-center h-80 desktop:h-screen">
          <div
            className={`from-transparent bg-gradient-to-b h-80 desktop:h-screen ${gradientStartStyles}`}
          >
            <div className="h-full opacity-95 p-2 rounded-2xl">
              <Title className="text-white flex justify-center items-center h-full text-center">
                Una <br /> Secundaria <br />
                Excepcional
              </Title>
            </div>
          </div>
        </div>
        <div className={`h-20 bg-gradient-to-b ${gradientEndStyles}`}></div>
        <main className="text-center px-4 pb-8 mx-auto desktop:w-5/6">
          <Paragraph className="mb-4">
            Somos una escuela tecnica que reside en Realicó, La Pampa. calle San
            lorenzo - 1330. formamos mas de 20 tecnicos en equipos e
            instalaciones electromecanicas por año.
          </Paragraph>
          <div className="desktop:flex desktop:gap-8 desktop:justify-center ">
            <Button className={buttonStyles}>
              <Link to="/ingresantes">¿Estas buscando inscribirte?</Link>
            </Button>
            <Button className={`mt-4 desktop:mt-0 ${buttonStyles}`}>
              <Link to="*">¿Buscas las mesas de examenes?</Link>
            </Button>
          </div>
          <article className="my-4">
            <Subtitle className="mb-2">Nuestra escuela</Subtitle>
            <Carrousel images={epetImages} />
            <Paragraph className="mt-2">
              Cada año actualizamos nuestras tecnicas de enseñanza,
              perfeccionando el aprendizaje del alumno.
            </Paragraph>
          </article>
          <article>
            <Subtitle className="mb-2">Nuestros premios</Subtitle>
            <Carrousel images={awardImages} />
            <Paragraph className="mt-2">
              Nuestra secundaria ha ganado enumerosos premios, en todo el pais.
              demostrando su prestigio en su contenido de aprendizaje.
            </Paragraph>
          </article>
        </main>
      </div>
    </>
  );
};

export default Home;
