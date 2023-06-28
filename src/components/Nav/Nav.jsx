import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";

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
