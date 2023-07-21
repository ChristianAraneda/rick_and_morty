import style from "./SearchBar.module.css";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Favorites from "../Favorites/Favorites";
import { useDispatch } from "react-redux";
import { cleanFav } from "../../redux/action";
import { toast } from "sonner";

export default function SearchBar({ onSearch, numRandom, clearAll, logOut }) {
  const dispatch = useDispatch();
  const location = useLocation();

  const [id, setId] = React.useState("");

  const handleChange = (evento) => {
    // console.log(evento.target.value);
    setId(evento.target.value);
  };

  // const handleClick = () => {
  //   onSearch(id);
  //   setId("");
  // };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // 👇 Get input value
      onSearch(id);
      setId("");
    }
  };

  // console.log(onSearch);
  return (
    <div>
      <NavLink to="/about" element={<About />} className={style.boton1}>
        About
      </NavLink>
      <NavLink to="/home" element={<Home />} className={style.boton1}>
        Home
      </NavLink>
      <NavLink to="/favorites" element={<Favorites />} className={style.boton1}>
        Favoritos
      </NavLink>
      <button className={style.logout} onClick={() => logOut()}>
        LOG OUT
      </button>

      <input
        placeholder="Buscador"
        className={style.input}
        type="search"
        onChange={handleChange}
        value={id}
        onKeyDown={handleKeyDown}
      />
      <button
        className={style.boton}
        onClick={() => {
          onSearch(id);
          setId("");
        }}>
        Agregar
      </button>
      <button
        className={style.boton}
        onClick={() => {
          numRandom();
        }}>
        RANDOM
      </button>
      <button
        name="clear"
        className={style.boton3}
        onClick={
          location.pathname === "/favorites"
            ? () => {
                dispatch(cleanFav());
                toast.error(`Se han eliminado TODOS los Favoritos`, {
                  icon: (
                    <ion-icon
                      name="trash-outline"
                      style={{ fontSize: "1.1rem" }}></ion-icon>
                  ),
                });
              }
            : () => clearAll()
        }>
        CLEAR
      </button>
    </div>
  );
}
