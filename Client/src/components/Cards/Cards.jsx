import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useDispatch } from "react-redux";
import { getFavorites } from "../../redux/action";
import { useEffect } from "react";

export default function Cards({ characters, onClose }) {
  const personajes = characters;
  console.log(personajes);
  const dispatch = useDispatch();
  /*  useEffect(() => {
    dispatch(getFavorites());
  }, []); */
  return (
    <div className={style.contenedor}>
      {personajes.map((personaje, index) => (
        <Card
          key={personaje.id}
          id={personaje.id}
          name={personaje.name}
          status={personaje.status}
          species={personaje.species}
          gender={personaje.gender}
          origin={personaje.origin.name}
          image={personaje.image}
          onClose={onClose}
          index={index}
          props={personaje}
        />
      ))}
    </div>
  );
}
