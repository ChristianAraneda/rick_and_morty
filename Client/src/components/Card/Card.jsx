import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addFavorite, deleteFavorite, getFavorites } from "../../redux/action";
import { toast } from "sonner";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  index,
}) {
  const location = useLocation();
  const dispatch = useDispatch();
  const favoritos = useSelector((state) => state.myFavorites); // ME TRAIGO "favorites" DEL GLOBAL
  const [isFav, setIsFav] = useState(false);

  let refHeart = useRef();
  let refAnimationHeart = useRef();

  const handleHeart = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(id));
      refHeart.current.classList.remove(style.fill_color);
      refAnimationHeart.current.classList.remove(style.animation);
      toast.error(`${name} se ha eliminado de Favoritos`, {
        icon: (
          <ion-icon
            name="trash-outline"
            style={{ fontSize: "1.1rem" }}></ion-icon>
        ),
      });
    } else {
      setIsFav(true);
      dispatch(
        addFavorite({ id, name, status, species, gender, origin, image })
      );
      refHeart.current.classList.add(style.fill_color);
      refAnimationHeart.current.classList.add(style.animation);
      toast.success(`${name} se a guardado en Favoritos`, {
        icon: (
          <ion-icon name="bookmark" style={{ fontSize: "1.1rem" }}></ion-icon>
        ),
      });
    }
    /*    return (
      refAnimationHeart.current.classList.toggle(style.animation),
      
    ) */
  };

  useEffect(() => {
    favoritos.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [favoritos]);

  // console.log(location.pathname);
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
            ? () => handleHeart()
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
