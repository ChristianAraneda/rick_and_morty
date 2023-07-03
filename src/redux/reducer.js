import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";
const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload],
      };

    case REMOVE_FAV:
      const updatedList = state.myFavorites.filter(
        (personaje) => personaje.id !== Number(payload)
      );

      return {
        ...state,
        myFavorites: updatedList,
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
        myFavorites:
          payload === "All" ? [...state.allCharacters] : generoFiltrado,
      };

    case ORDER:
      const allCharactersCopy = [...state.allCharacters];
      return {
        ...state,
        myFavorites:
          payload === "A"
            ? allCharactersCopy.sort((a, b) => a.id - b.id)
            : allCharactersCopy.sort((a, b) => b.id - a.id),
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
