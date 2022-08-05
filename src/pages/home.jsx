import React from "react";
import { useStyles } from "../hooks/useStyles";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import Carrousel from "../components/Carrousel";

import EPET_IMAGES from "../db/epet-images.json";
import AWARDS_IMAGES from "../db/awards-images.json";

const Home = () => {
  const { titleStyles, gradientStartStyles, gradientEndStyles, buttonStyles } =
    useStyles();

  return (
    <>
      <div>
        <div className="home-background bg-cover bg-center h-96 desktop:h-[calc(100vh-8rem)]">
          <div
            className={`from-transparent bg-gradient-to-b h-96 desktop:h-[calc(100vh-8rem)] flex justify-center items-center ${gradientStartStyles}`}
          >
            <Title className="text-fourth-color text-center">
              Una <br /> Secundaria <br /> Excepcional
            </Title>
          </div>
        </div>
        <div className={`h-20 bg-gradient-to-b ${gradientEndStyles}`}></div>
        <main className="text-center relative px-4 pb-8 mx-auto tablet:w-3/4 tablet:px-0">
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
          <article className="my-6 tablet:mx-auto desktop:w-3/4">
            <Subtitle className={`mb-2 ${titleStyles}`}>
              Nuestra escuela
            </Subtitle>
            <Carrousel
              images={EPET_IMAGES}
              className="h-60 tablet:h-72 desktop:h-96 tablet:mx-auto tablet:aspect-video"
            />
            <Paragraph className="mt-2">
              Cada año actualizamos nuestras tecnicas de enseñanza,
              perfeccionando el aprendizaje del alumno.
            </Paragraph>
          </article>
          <article className="tablet:mx-auto desktop:w-3/4">
            <Subtitle className={`mb-2 ${titleStyles}`}>
              Nuestros premios
            </Subtitle>
            <Carrousel
              images={AWARDS_IMAGES}
              className="h-60 tablet:h-72 desktop:h-96 tablet:mx-auto tablet:aspect-video"
            />
            <Paragraph className="mt-2 w-full">
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
