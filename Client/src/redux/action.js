import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  CLEAN_FAV,
  GET_FAV,
} from "./types";
import axios from "axios";

const URL_BASE = "http://localhost:3001";

export const addFavorite = (character) => {
  const endpoint = "http://localhost:3001/favorites/";

  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, character); // Enviamos character por body
      const { data } = response;
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }

    // axios.post(endpoint, character).then(({ data }) => {
    //   return dispatch({
    //     type: ADDFAVORITE,
    //     payload: data,
    //   });
    // });
  };
};

export const deleteFavorite = (id) => {
  const endpoint = "http://localhost:3001/favorites/" + id;

  return async (dispatch) => {
    try {
      const response = await axios.delete(endpoint);
      const { data } = response;
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
    // axios.delete(endpoint).then(({ data }) => {
    //   return dispatch({
    //     type: DELETEFAVORITE,
    //     payload: data,
    //   });
    // });
  };
};

export const getFavorites = () => {
  return async (dispatch) => {
    const response = await axios.get(`${URL_BASE}/favorites/`);
    dispatch({ type: GET_FAV, payload: response.data });
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const cleanFav = () => {
  const endpoint = "http://localhost:3001/favorites/";
  return async (dispatch) => {
    try {
      await axios.delete(endpoint);
      return dispatch({
        type: CLEAN_FAV,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
