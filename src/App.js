import Astronauta from "./3800_2_06-removebg-preview.png";
import Planeta from "./pngwing.com.png";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
// import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Deatil from "./components/Deatil/Deatil";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import Favortires from "./components/Favorites/Favorites";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

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
    navigate("/home");
  };

  // ******** 5.- SEGURIDAD *********

  const [access, setAccess] = useState(false);

  const EMAIL = "profe.hernan@soyhenry.com";
  const PASSWORD = "hola123";

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Las credenciales NO SON VALIDAS FORRO!");
    }
  };

  const logOut = () => {
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      {location.pathname !== "/" ? (
        <Nav
          onSearch={onSearch}
          numRandom={numRandom}
          clearAll={clearAll}
          logOut={logOut}
        />
      ) : null}
      <img className="astro" src={Astronauta} alt="" />
      <img className="planeta" src={Planeta} alt="" />
      <div className="objct8"></div>
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/favorites" element={<Favortires onClose={onClose} />} />
        <Route path={`/detail/:id`} element={<Deatil />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
