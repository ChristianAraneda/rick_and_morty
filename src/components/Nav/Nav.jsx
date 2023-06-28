import About from "../About/About";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link, NavLink } from "react-router-dom";
import Home from "../Home/Home";

export default function Nav({ onSearch, numRandom, clearAll }) {
  // console.log(onSearch);
  return (
    <div className={style.menu}>
      <br />

      <SearchBar
        onSearch={onSearch}
        numRandom={numRandom}
        clearAll={clearAll}
      />
      <br />
    </div>
  );
}
