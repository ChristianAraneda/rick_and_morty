import style from "./Deatil.module.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Deatil = () => {
  const navegate = useNavigate();
  let { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          alert("No hay personajes con ese ID");
        }
      })
      .catch((error) => console.log(error.message));
    return setCharacter({});
  }, [id]);

  // console.log(character.origin);

  const imgagen_derecha = {
    backgroundImage: `url(${character.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "50%",
    zIndex: 1,
    position: "relative",
  };
  // console.log(imgagen_derecha);

  return (
    <div className={style.pantallaDividida}>
      <div className={style.izquierda}>
        <h2 className={style.nombre}>{character.name && character.name}</h2>
        <h2 className={style.h2}>
          STATUS:
          <span className={style.span}>
            {character.status && character.status}
          </span>
        </h2>
        {character.species ? (
          <h2 className={style.h2}>
            SPECIE:
            <span className={style.span}>{character.species}</span>
          </h2>
        ) : (
          ""
        )}
        {character.gender ? (
          <h2 className={style.h2}>
            GENDER:
            <span className={style.span}>{character.gender}</span>
          </h2>
        ) : (
          ""
        )}
        <h2 className={style.h2}>
          ORIGIN:
          <span className={style.span}>
            {character.origin && character.origin.name}
          </span>
        </h2>
      </div>
      <div style={imgagen_derecha}>
        <button className={style.buttonClose} onClick={() => navegate(-1)}>
          X
        </button>
        ;
        {/* <img
          src={character.image && character.image}
          alt=""
          className={style.image} 
        /> */}
      </div>
    </div>
  );
};

export default Deatil;
