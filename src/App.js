import axios from "axios";
import { useState } from "react";
import "./App.css";
// import Card from "./components/Card.jsx";
import Cards from "./components/Cards/Cards";
// import SearchBar from "./components/SearchBar.jsx";
// import characters, { Rick } from "./data.js";
import Nav from "./components/Nav/Nav";
// import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    if (isNaN(id)) {
      alert("¡El ID ingresado no es válido!");
      return;
    }
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        const characterExists = characters.find(
          (character) => character.id === data.id
        );
        if (characterExists) {
          alert("¡Este personaje ya se encuentra en pantalla!");
        } else if (data.id) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (index) => {
    const filteredCharacters = characters.filter((_, i) => i !== Number(index));
    setCharacters(filteredCharacters);
  };

  const numRandom = () => {
    let randomID = Math.round(Math.random() * (825 - 0) + 1);
    console.log(randomID);
    onSearch(randomID);
  };

  const clearAll = () => {
    setCharacters([]);
  };
  return (
    <div className="App">
      <Nav onSearch={onSearch} numRandom={numRandom} clearAll={clearAll} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
