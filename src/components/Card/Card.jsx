import Deatil from "../Deatil/Deatil";
import style from "./Card.module.css";
import { Link, NavLink } from "react-router-dom";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  index,
}) {
  return (
    <div id={id} key={id} className={style.card}>
      <button className={style.buttonClose} onClick={() => onClose(index)}>
        X
      </button>
      <NavLink to={`/detail/${id}`} className={style.titulo}>
        <h2>{name}</h2>
        <h2 className={style.h2}>{species}</h2>
        <img src={image} alt="" className={style.image} />
      </NavLink>
      {/*       <h2 className={style.h2}>{status}</h2>
      <br />
      <h2 className={style.h2}>{species}</h2>
      <h2 className={style.h2}>{gender}</h2>
      <h2 className={style.h2}>{origin}</h2> */}
    </div>
  );
}
