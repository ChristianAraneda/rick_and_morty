import axios from "axios";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Deatil from "./components/Deatil/Deatil";
import Error from "./components/Error/Error";

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
      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path={`/detail/:id`} element={<Deatil />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
