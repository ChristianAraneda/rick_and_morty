import style from "./SearchBar.module.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";

export default function SearchBar({ onSearch, numRandom, clearAll }) {
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
      <button className={style.boton3} onClick={() => clearAll()}>
        CLEAR
      </button>
    </div>
  );
}
