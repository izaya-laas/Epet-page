import React from "react";
import Paragraph from "../components/Paragraph";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import { FiCheckCircle } from "react-icons/fi";
import { useStyles } from "../hooks/useStyles";
import Main from "../components/Main";
import SkeletonImage from "../components/SkeletonImage";

const paso1 = "https://i.ibb.co/SBrLBYK/ingresantes2022-paso1.webp";
const paso2 = "https://i.ibb.co/njrf8B9/ingresantes2022-paso2.webp";
const paso3 = "https://i.ibb.co/wsn32tw/ingresantes2022-paso3.webp";

const Entrants = () => {
  const { subtitleStyles, linkStyles, borderStyles, skeletonBaseColor } =
    useStyles();

  return (
    <>
      <Main>
        <Title
          className={`text-center mb-10 pb-2 border-b-2 border-dotted ${borderStyles}`}
        >
          Inscripciones
        </Title>
        <section className="text-lg text-left desktop:w-3/4 desktop:mx-auto">
          <Subtitle className={`text-center ${subtitleStyles}`}>
            ¿Cómo ingresar a la <strong>EPET N°6</strong>?
          </Subtitle>
          <Paragraph className="text-center">
            Segui estos tres pasos para inscribirte en el ciclo electivo 2022
          </Paragraph>
          <ol className="flex flex-col justify-center items-center">
            <li className="my-6 w-full">
              <FiCheckCircle className="inline mr-1" />
              <Paragraph className="my-2 inline-block">
                <strong>Paso 1: </strong>
                <a
                  href="https://vozporvos.lapampa.edu.ar/"
                  className={`underline ${linkStyles}`}
                >
                  Registro en Voz por vos
                </a>
              </Paragraph>

              <SkeletonImage
                className="rounded-2xl"
                src={paso1}
                alt="Paso 1 a seguir para registrarte en epet n°6"
                //SkeletonProps
                height="350"
                baseColor={skeletonBaseColor}
                rounded
              />
            </li>
            <li className="my-6 w-full">
              <FiCheckCircle className="inline mr-1" />
              <Paragraph className="my-2 inline-block">
                <strong>Paso 2:</strong> Carga tus datos
              </Paragraph>
              <SkeletonImage
                className="rounded-2xl"
                src={paso2}
                alt="Paso 2 a seguir para registrarte en epet n°6"
                //SkeletonProps
                height="350"
                baseColor={skeletonBaseColor}
                rounded
              />
            </li>
            <li className="my-6 w-full">
              <FiCheckCircle className="inline mr-1" />
              <Paragraph className="my-2 inline-block">
                <strong>Paso 3:</strong> Inscripciones ciclo 2022
              </Paragraph>
              <SkeletonImage
                className="rounded-2xl"
                src={paso3}
                alt="Paso 3 a seguir para registrarte en epet n°6"
                //SkeletonProps
                height="350"
                baseColor={skeletonBaseColor}
                rounded
              />
            </li>
          </ol>
          <Paragraph className="text-center">
            En caso de tener algun problema con la inscripción, llamanos a{" "}
            <a href="tel:+542302-210818">2302-210818</a>
          </Paragraph>
        </section>
      </Main>
    </>
  );
};

export default Entrants;
