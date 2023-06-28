import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  const personajes = characters;
  console.log(personajes);
  return (
    <div className={style.contenedor}>
      {personajes.map((personaje, index) => (
        <Card
          key={index}
          id={personaje.id}
          name={personaje.name}
          status={personaje.status}
          species={personaje.species}
          gender={personaje.gender}
          origin={personaje.origin.name}
          image={personaje.image}
          onClose={onClose}
          index={index}
        />
      ))}
    </div>
  );
}
