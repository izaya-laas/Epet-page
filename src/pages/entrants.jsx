import React from "react";
import Paragraph from "../components/Paragraph";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import { FiCheckCircle } from "react-icons/fi";

const paso1 = "https://i.ibb.co/xXGsvjY/ingresantes2022-paso1.jpg";
const paso2 = "https://i.ibb.co/61HtzGD/ingresantes2022-paso2.jpg";
const paso3 = "https://i.ibb.co/JQ8mGQW/ingresantes2022-paso3.jpg";

const Entrants = () => {
  return (
    <>
      <main className="p-4 ">
        <Title className="text-center mb-10 pb-2 border-b-2 border-dotted ">
          Inscripciones
        </Title>
        <section className="text-lg text-left">
          <Subtitle className="text-center text-secondary-color">
            ¿Cómo ingresar a la <bold>EPET N°6</bold>?
          </Subtitle>
          <Paragraph className="text-center">
            Segui estos tres pasos para inscribirte en el ciclo electivo 2022
          </Paragraph>
          <ol className="flex flex-col justify-center items-center">
            <li className="my-6">
              <FiCheckCircle className="inline mr-1" />
              <Paragraph className="my-2 inline-block">
                <strong>Paso 1: </strong>
                <a
                  href="https://vozporvos.lapampa.edu.ar/"
                  className="text-blue-300 underline"
                >
                  Registro en Voz por vos
                </a>
              </Paragraph>
              <img
                src={paso1}
                alt="Paso 1 a seguir para registrarte en epet n°6"
                className="rounded-2xl"
              />
            </li>
            <li className="my-6">
              <FiCheckCircle className="inline mr-1" />
              <Paragraph className="my-2 inline-block">
                <strong>Paso 2:</strong> Carga tus datos
              </Paragraph>
              <img
                src={paso2}
                alt="Paso 2 a seguir para registrarte en epet n°6"
                className="rounded-2xl"
              />
            </li>
            <li className="my-6">
              <FiCheckCircle className="inline mr-1" />
              <Paragraph className="my-2 inline-block">
                <strong>Paso 3:</strong> Inscripciones ciclo 2022
              </Paragraph>
              <img
                src={paso3}
                alt="Paso 3 a seguir para registrarte en epet n°6"
                className="rounded-2xl"
              />
            </li>
          </ol>
          <Paragraph className="text-center">
            En caso de tener algun problema con la inscripción, llamanos a{" "}
            <a href="tel:+542302-210818">2302-210818</a>
          </Paragraph>
        </section>
      </main>
    </>
  );
};

export default Entrants;
