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
import { Toaster, toast } from "sonner";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const [errorApi, seterrorApi] = useState(false);
  // console.log(location.pathname);

  const [characters, setCharacters] = useState([]);

  async function onSearch(dato) {
    // agrega personajes a characters
    // axios(`http://localhost:3001/character/${dato}`)
    //   .then((respuesta) => {
    //     if (respuesta.data.name) {
    //       // antes de agregar busco si "ya existe". Como lo harias?
    //       // tu codigo aquí:
    //       // if("yaExiste") return
    //       setCharacters((oldChars) => [...oldChars, respuesta.data]);
    //     } else {

    //     }
    //   })
    //   .catch((err) => alert(err.response.data.error));

    try {
      const backRequest = await axios(
        `http://localhost:3001/character/${dato}`
      );
      const characterExists = characters.find(
        (character) => character.id === backRequest.data.id
      );
      if (characterExists) {
        toast.error("¡Este personaje ya se encuentra en pantalla!");
      } else if (backRequest.data.name) {
        seterrorApi(false);
        setCharacters((oldChars) => [...oldChars, backRequest.data]);
      }
    } catch (error) {
      toast.error("Ese número no existe");
    }
  }

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

  async function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/user/login/";

    try {
      const backendLogin = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { data } = backendLogin;
      const { access } = data;
      setAccess(access);
      if (!access) {
        toast.error("Credenciales incorrectas");
      } else {
        toast.success("Credenciales correctas");
      }
      access && navigate("/home");
    } catch (error) {
      // No se pudo hacer la solicitud al backend.
      toast.error(error.message);
    }
    // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
    //   const { access } = data;
    //   setAccess(access);
    //   access && navigate("/home");
    // });
  }

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
      <Toaster richColors />
      <img className="astro" src={Astronauta} alt="" />
      <img className="planeta" src={Planeta} alt="" />
      <div className="objct8"></div>
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={
            !errorApi ? (
              <Home characters={characters} onClose={onClose} />
            ) : (
              <h1>Componente de error 404</h1>
            )
          }
        />
        <Route path="/favorites" element={<Favortires onClose={onClose} />} />
        <Route path={`/detail/:id`} element={<Deatil />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
