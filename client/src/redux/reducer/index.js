import {
  GET_GAMES,
  SEARCH_BY_NAME,
  ORDER_BY_NAME,
  ORDER_BY_RATING,

  GET_GENRES,
  FILTER_BY_GENRES,
  GET_PLATFORMS,
  FILTER_BY_PLATFORMS,
  GET_DETAIL,
  CLEAR_DETAIL

} from "../actions/types";

const initialState = {
  allGames: [],
  allGamesFilter: [],
  genres: [],
  platforms: [],
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



    // case FILTER_BY_GENRE:
    //   const allGames1 = state.allGamesFilter;
    //   const gamesFiltered =
    //     action.payload === "All"
    //       ? allGames1
    //       : allGames1.filter((game) => {
    //           return game.genres.find((gen) => {
    //             return gen === action.payload;
    //           });
    //         });
    //   return {
    //     ...state,
    //     allGames: gamesFiltered,
    //   };

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


      case GET_GENRES:
        return{
            ...state,
            genres: action.payload
        };

        
       case GET_PLATFORMS:
        return{
            ...state,
           platforms: action.payload
        };


      case FILTER_BY_GENRES:
      const allGenres = state.allGamesFilter;
      const filteredGen = action.payload === 'All' ? allGenres : allGenres.filter(e => e.genres.length > 0 && e.genres.includes(action.payload));
       return {
        ...state,
        allGames: filteredGen
      };

      case FILTER_BY_PLATFORMS:
        const allPlatforms = state.allGamesFilter;
        const filteredPlat = action.payload === "All" ? allPlatforms : allPlatforms.filter(e => e.platforms.length > 0 && e.platforms.includes(action.payload));
        return {
          ...state,
          allGames: filteredPlat
        };


      case GET_DETAIL:
          return{
              ...state,
              detail: action.payload
          };
      case CLEAR_DETAIL:
          return{
              ...state,
              detail:[]
          };        
           
      default: return { ...state }
  }
}

export default rootReducer;
