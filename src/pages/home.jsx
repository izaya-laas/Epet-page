import React from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import introductionImage from "../epet-image.jpg";

const Home = () => {
  return (
    <>
      <div className="home-background bg-cover bg-center h-80 desktop:h-96">
        <div className="from-transparent to-[#0f172a] bg-gradient-to-b h-80 desktop:h-96">
          <div className="h-full opacity-95 p-2 rounded-2xl">
            <Title className=" text-white flex justify-center items-center h-full text-center">
              Una <br /> Secundaria <br />
              Excepcional
            </Title>
          </div>
        </div>
      </div>
      <div className="h-20 from-[#0f172a] bg-gradient-to-b to-[#232833]"></div>
      <main className="text-center px-4 mx-auto desktop:w-5/6">
        <Paragraph className="text-white mb-4">
          Somos una escuela tecnica que reside en Realicó, La Pampa. calle San
          lorenzo - 1330. formamos mas de 20 tecnicos en equipos e instalaciones
          electromecanicas por año.
        </Paragraph>
        <div>
          <Button>
            <Link to="/ingresantes">¿Estas buscando inscribirte?</Link>
          </Button>
          <Button className="mt-4">
            <Link to="*">¿Buscas las mesas de examenes?</Link>
          </Button>
        </div>
        <div className="my-4">
          <div className="bg-black h-40">
            <Subtitle className="text-white h-full flex items-center justify-center">
              Carrusel de imagenes
            </Subtitle>
          </div>
          <Paragraph className="text-white mt-2">
            Cada año actualizamos nuestras tecnicas de enseñanza, perfeccionando
            el aprendizaje del alumno.
          </Paragraph>
        </div>
        <div>
          <div className="bg-black h-40">
            <Subtitle className="text-white h-full flex items-center justify-center">
              Nuestros premios
            </Subtitle>
          </div>
          <Paragraph className="text-white mt-2">
            Nuestra secundaria ha ganado enumerosos premios, en todo el pais.
            demostrando su prestigio en su contenido de aprendizaje.
          </Paragraph>
        </div>
      </main>
    </>
  );
};

export default Home;
