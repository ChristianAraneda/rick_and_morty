import Deatil from "../Deatil/Deatil";
import style from "./Card.module.css";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/action";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  index,
  addFav,
  removeFav,
  props,
  favoritos,
}) {
  const location = useLocation();
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(props);
    }
  };

  useEffect(() => {
    favoritos.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [favoritos]);

  let refHeart = useRef();
  let refAnimationHeart = useRef();

  const handleHeart = (event) => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(props);
    }
    refAnimationHeart.current.classList.toggle(style.animation);
    refHeart.current.classList.toggle(style.fill_color);
  };

  console.log(location.pathname);
  return (
    <div id={id} key={id} className={style.card}>
      <div
        className={`${style.heart} ${isFav ? style.fill_color : ""}`}
        ref={refHeart}
        onClick={handleHeart}>
        <div className={style.animationheart} ref={refAnimationHeart}></div>
      </div>

      {/* {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )} */}
      <button
        className={style.buttonClose}
        onClick={
          location.pathname === "/favorites"
            ? () => handleFavorite()
            : () => {
                onClose(index);
              }
        }>
        X
      </button>
      <NavLink to={`/detail/${id}`} className={style.titulo}>
        <h1 className={style.h1}>{name}</h1>
        <h2 className={style.h2}>{species}</h2>
        <img src={image} alt="" className={style.image} />
      </NavLink>
      {/*       <h2 className={style.h2}>{status}</h2>
      <br />
      <h2 className={style.h2}>{species}</h2>
      <h2 className={style.h2}>{gender}</h2>
      <h2 className={style.h2}>{origin}</h2> */}
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    favoritos: state.myFavorites,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: (personaje) => dispatch(addFav(personaje)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
