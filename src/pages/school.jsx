import Main from "../components/Main";
import Paragraph from "../components/Paragraph";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import { useStyles } from "../hooks/useStyles";

const School = () => {
  const { borderStyles } = useStyles();

  return (
    <Main>
      <Title className={`border-b-2 border-dotted ${borderStyles}`}>
        Conocenos
      </Title>
      <Paragraph className="my-6">
        Somos una escuelta tecnica de la pampa Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Rem quod reiciendis saepe tempora quas et
        pariatur illum, exercitationem mollitia eveniet facere, consequuntur
        distinctio labore nihil natus cumque in expedita culpa!
      </Paragraph>
      <section className="my-6">
        <Subtitle>Mision & Valores</Subtitle>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          consectetur tenetur cupiditate culpa omnis dolorum saepe recusandae,
          incidunt, a obcaecati ut. Non error a odit cumque praesentium
          accusantium, id sit?
        </Paragraph>
      </section>
      <section className="my-6">
        <Subtitle>Historia</Subtitle>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          consectetur tenetur cupiditate culpa omnis dolorum saepe recusandae,
          incidunt, a obcaecati ut. Non error a odit cumque praesentium
          accusantium, id sit?
        </Paragraph>
      </section>
    </Main>
  );
};

export default School;
