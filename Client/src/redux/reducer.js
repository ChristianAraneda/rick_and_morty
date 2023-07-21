import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  CLEAN_FAV,
  GET_FAV,
} from "./types";
const initialState = {
  myFavorites: [],
  allCharacters: [],
  filter: "All",
  order: "A",
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };

    case FILTER:
      // if (payload === "All")
      //   return {
      //     ...state,
      //     myFavorites: state.allCharacters,
      //   };
      const generoFiltrado = state.allCharacters.filter(
        (personaje) => personaje.gender === payload
      );

      return {
        ...state,
        filter: payload,
        myFavorites:
          payload === "All" ? [...state.allCharacters] : generoFiltrado,
      };

    case ORDER:
      /* return {
        ...state,
        order: payload,
        myFavorites:
          payload === "A"
            ? [...state.myFavorites.sort((a, b) => a.id - b.id)]
            : [...state.myFavorites.sort((a, b) => b.id - a.id)],
      }; */

      const allCharactersCopy = [...state.myFavorites];
      const sortedCharacters =
        payload === "A"
          ? allCharactersCopy.sort((a, b) => a.id - b.id)
          : allCharactersCopy.sort((a, b) => b.id - a.id);

      return {
        ...state,
        myFavorites: sortedCharacters,
      };

    case CLEAN_FAV:
      return {
        myFavorites: [],
        allCharacters: [],
        filter: "All",
        order: "A",
      };

    case GET_FAV:
      return {
        ...state,
        myFavorites: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
