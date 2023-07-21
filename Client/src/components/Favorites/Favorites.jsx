import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css";
import { useState, useEffect } from "react";
import { filterCards, getFavorites, orderCards } from "../../redux/action";

export default function Favorites() {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  /*   useEffect(() => {
    dispatch(getFavorites());
  }, []); */

  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div className={style.contenedorPrincipal}>
      <div className={style.contSelect}>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="All">Todos</option>
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
          <option value="Genderless">Sin Genero</option>
          <option value="unknown">Desconocido</option>
        </select>
      </div>

      <div className={style.contenedor}>
        {favorites.map((personaje, index) => (
          <Card
            key={personaje.id}
            id={personaje.id}
            name={personaje.name}
            status={personaje.status}
            species={personaje.species}
            gender={personaje.gender}
            // origin={personaje.origin.name}
            image={personaje.image}
            index={index}
            props={personaje}
          />
        ))}
      </div>
    </div>
  );
}
