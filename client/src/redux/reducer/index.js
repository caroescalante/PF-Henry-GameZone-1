import {
  GET_GAMES,
  SEARCH_BY_NAME,
  FILTER_BY_GENRE,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
  GET_DETAIL
} from "../actions/types";

const initialState = {
  allGames: [],
  allGamesFilter: [],
  detail : [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        allGames: action.payload,
        allGamesFilter: action.payload,
      };

    case SEARCH_BY_NAME:
      return {
        ...state,
        allGames: action.payload,
      };



    case FILTER_BY_GENRE:
      const allGames1 = state.allGamesFilter;
      const gamesFiltered =
        action.payload === "All"
          ? allGames1
          : allGames1.filter((game) => {
              return game.genres.find((gen) => {
                return gen === action.payload;
              });
            });
      return {
        ...state,
        allGames: gamesFiltered,
      };

    case ORDER_BY_NAME:
      const allGames2 = state.allGamesFilter;
      const orderGamesName =
        action.payload === "Asc"
          ? allGames2.sort(function (a, b) {
              if (a.name > b.name) return 1 
              if (b.name > a.name) return -1 
              return 0;
            })
          : allGames2.sort(function (a, b) {
              if (a.name < b.name) return 1;
              if (b.name < a.name) return -1;
              return 0;
            });
      return {
        ...state,
        allGames: action.payload === "All" ? allGames2 : orderGamesName,
      };

    case ORDER_BY_RATING:
      const allGames3 = state.allGamesFilter;
      const orderGamesRating =
        action.payload === "Asc"
          ? allGames3.sort(function (a, b) {
              if (a.name > b.name) return 1;
              if (b.name > a.name) return -1
              return 0;
            })
          : allGames3.sort(function (a, b) {
              if (a.name < b.name) return 1;
              if (b.name < a.name) return -1;
              return 0
            });
      return {
        ...state,
        allGames: action.payload === "All" ? allGames3 : orderGamesRating,
      };
      case GET_DETAIL:
        case "GET_DETAIL":
            return{
                ...state,
                detail: action.payload
            };
            
      default: return { ...state }
  }
}

export default rootReducer;
