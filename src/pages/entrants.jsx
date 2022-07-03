import React from "react";
import Paragraph from "../components/Paragraph";
import Subtitle from "../components/Subtitle";
import paso1 from "../ingresantes2022-paso1.jpg";
import paso2 from "../ingresantes2022-paso2.jpg";
import paso3 from "../ingresantes2022-paso3.jpg";

const Entrants = () => {
  return (
    <>
      <main className="p-4">
        <Subtitle className="mt-2 text-center">
          ¿Cómo ingresar a la <bold>EPET N°6</bold>?
        </Subtitle>
        <Paragraph className="text-center">
          Segui estos tres simples pasos para inscribirte en el ciclo electivo
          2022
        </Paragraph>
        <div className="text-lg text-left">
          <ol className="flex flex-col justify-center items-center">
            <li className="my-6">
              <Paragraph className="my-2">
                <strong>Paso 1:</strong> Registro en Voz por vos
              </Paragraph>
              <img
                src={paso1}
                alt="Paso 1 a seguir para registrarte en epet n°6"
                className="rounded-2xl"
              />
            </li>
            <li className="my-6">
              <Paragraph className="my-2">
                <strong>Paso 2:</strong> Carga de datos de los futuros
                estudiantes
              </Paragraph>
              <img
                src={paso2}
                alt="Paso 2 a seguir para registrarte en epet n°6"
                className="rounded-2xl"
              />
            </li>
            <li className="my-6">
              <Paragraph className="my-2">
                <strong>Paso 3:</strong> Inscripciones ciclo lectivo 2022
              </Paragraph>
              <img
                src={paso3}
                alt="Paso 3 a seguir para registrarte en epet n°6"
                className="rounded-2xl"
              />
            </li>
          </ol>
        </div>
      </main>
    </>
  );
};

export default Entrants;
