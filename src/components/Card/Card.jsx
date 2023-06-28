import Deatil from "../Deatil/Deatil";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

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
      <Link to={`/detail/${id}`}>
        <h2 className={style.titulo}>{name}</h2>
      </Link>
      <h2 className={style.h2}>{status}</h2>
      <br />
      <h2 className={style.h2}>{species}</h2>
      <h2 className={style.h2}>{gender}</h2>
      <h2 className={style.h2}>{origin}</h2>
      <img src={image} alt="" className={style.image} />
    </div>
  );
}
