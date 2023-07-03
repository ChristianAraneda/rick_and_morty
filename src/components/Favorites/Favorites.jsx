import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "../Cards/Cards.module.css";
import { useState, useEffect } from "react";
import { filterCards, orderCards } from "../../redux/action";

function Favorites({ favoritos }) {
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    // setAux(!aux);
    dispatch(orderCards(event.target.value));
    setAux(true);
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };
  const personajes = favoritos;

  return (
    <div className={style.contenedorPrincipal}>
      <div>
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
            index={index}
            props={personaje}
          />
        ))}
      </div>
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    favoritos: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
