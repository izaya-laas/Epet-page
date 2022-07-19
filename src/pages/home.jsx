import React from "react";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import darkContext from "../context/darkContext";
import introductionImage from "../epet-image.jpg";

const Home = () => {
  const { dark } = useContext(darkContext);
  const [darkStyles, setDarkStyles] = useState({});

  const {
    gradientStartStyles,
    gradientEndStyles,
    backgroundMain,
    textColor,
    buttonStyles,
  } = darkStyles;

  useEffect(() => {
    if (dark) {
      setDarkStyles({
        gradientStartStyles: "to-sky-300",
        gradientEndStyles: "from-sky-300 to-[#f1f1f1]",
        backgroundMain: "bg-[#f1f1f1]",
        textColor: "text-[#0f172a]",
        buttonStyles: "bg-[#0f172a] text-white",
        buttonStyles: "bg-sky-300 text-[#0f172a]",
      });
    } else {
      setDarkStyles({
        gradientStartStyles: "to-[#0f172a]",
        gradientEndStyles: "from-[#0f172a] to-[#1f232b]",
        backgroundMain: "bg-[#1f232b]",
        textColor: "text-white",
        buttonStyles: "bg-[#0f172a] text-white",
      });
    }
  }, [dark]);

  return (
    <>
      <div className={`${backgroundMain}`}>
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
        <main
          className={`text-center px-4 pb-8 mx-auto desktop:w-5/6 ${textColor}`}
        >
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
          <div className="my-4">
            <div className="bg-black h-40">
              <Subtitle className="h-full flex items-center justify-center">
                Carrusel de imagenes
              </Subtitle>
            </div>
            <Paragraph className="mt-2">
              Cada año actualizamos nuestras tecnicas de enseñanza,
              perfeccionando el aprendizaje del alumno.
            </Paragraph>
          </div>
          <div>
            <div className="bg-black h-40">
              <Subtitle className="h-full flex items-center justify-center">
                Nuestros premios
              </Subtitle>
            </div>
            <Paragraph className="mt-2">
              Nuestra secundaria ha ganado enumerosos premios, en todo el pais.
              demostrando su prestigio en su contenido de aprendizaje.
            </Paragraph>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
