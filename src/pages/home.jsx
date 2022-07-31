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

const EPET_IMAGES = [
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
const AWARDS_IMAGES = [
  {
    image: "./src/assets/desafio-eco.jpg",
    alt: "desafio eco imagen",
    description: "Alumnos crean una wea que sirve ecologicamente",
    title: "desafio-eco",
  },
  {
    image: "./src/assets/proyecto-insur.jpg",
    alt: "Proyecto insur imagen",
    description: "Alumnos de 6to año participan en un proyecto de plastico",
  },
  {
    image:
      "./src/assets/reconocimiento-inet-transportador-para-personas-no-videntes.jpg",
    alt: "reconocimiento inet transportador para personas no videntes imagen",
  },
];

const Home = () => {
  const { isDark } = useContext(darkContext);
  const [darkStyles, setDarkStyles] = useState({});
  const { titleStyles, gradientStartStyles, gradientEndStyles, buttonStyles } =
    darkStyles;

  useEffect(() => {
    if (isDark) {
      setDarkStyles({
        titleStyles: "text-secondary-color",
        gradientStartStyles: "to-primary-color",
        gradientEndStyles: "from-primary-color to-third-color",
        buttonStyles: "bg-primary-color text-fourth-color border-fourth-color",
      });
    } else {
      setDarkStyles({
        titleStyles: "text-primary-color",
        gradientStartStyles: "to-secondary-color",
        gradientEndStyles: "from-secondary-color to-fourth-color",
        buttonStyles:
          "bg-secondary-color text-primary-color border-primary-color",
      });
    }
  }, [isDark]);

  return (
    <>
      <div>
        <div className="home-background bg-cover bg-center h-96 desktop:h-[calc(100vh-8rem)]">
          <div
            className={`from-transparent bg-gradient-to-b h-96 desktop:h-[calc(100vh-8rem)] flex justify-center items-center ${gradientStartStyles}`}
          >
            <Title className="text-fourth-color text-center tablet:text-5xl desktop:text-6xl">
              Una <br /> Secundaria <br /> Excepcional
            </Title>
          </div>
        </div>
        <div className={`h-20 bg-gradient-to-b ${gradientEndStyles}`}></div>
        <main className="text-center px-4 pb-8 mx-auto tablet:w-5/6">
          <Paragraph className="mb-4">
            Somos una escuela tecnica que reside en Realicó, La Pampa. calle San
            lorenzo - 1330. formamos mas de 20 tecnicos en equipos e
            instalaciones electromecanicas por año.
          </Paragraph>
          <div className="tablet:flex tablet:flex-wrap tablet:gap-4 tablet:justify-center ">
            <Button className={`mt-4 tablet:mt-0 ${buttonStyles}`}>
              <Link to="/ingresantes">¿Estas buscando inscribirte?</Link>
            </Button>
            <Button className={`mt-4 tablet:mt-0 ${buttonStyles}`}>
              <Link to="*">¿Buscas las mesas de examenes?</Link>
            </Button>
          </div>
          <article className="my-6 tablet:w-3/4 tablet:mx-auto">
            <Subtitle className={`mb-2 ${titleStyles}`}>
              Nuestra escuela
            </Subtitle>
            <Carrousel
              images={EPET_IMAGES}
              className="h-60 tablet:h-72 desktop:h-96"
            />
            <Paragraph className="mt-2">
              Cada año actualizamos nuestras tecnicas de enseñanza,
              perfeccionando el aprendizaje del alumno.
            </Paragraph>
          </article>
          <article className="tablet:w-3/4 tablet:mx-auto">
            <Subtitle className={`mb-2 ${titleStyles}`}>
              Nuestros premios
            </Subtitle>
            <Carrousel
              images={AWARDS_IMAGES}
              className="h-60 tablet:h-72 desktop:h-96"
            />
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
