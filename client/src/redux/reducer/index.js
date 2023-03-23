import {
  GET_GAMES,
  SEARCH_BY_NAME,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
  ORDER_BY_PRICE,
  GET_GENRES,
  FILTER_BY_GENRES,
  GET_PLATFORMS,
  FILTER_BY_PLATFORMS,
  GET_DETAIL,
  CLEAR_DETAIL,
  GET_USERS,
  EMAIL_USER,
  SEARCH_BY_NAME_ERROR,
  GET_FAVORITES,
} from "../actions/types";

const initialState = {
  allGames: [],
  allGamesOriginal: [],
  allGamesFilter: [],
  genres: [],
  platforms: [],
  detail : [],
  users: [],
  allUsers: [],
  emailUser:[],
  searchError: null,
  filterGenres: 'All',
  filterPlataforms: 'All',
  favorites: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        allGames: action.payload,
        allGamesFilter: action.payload,
        allGamesOriginal: action.payload
      };

    case SEARCH_BY_NAME:
      return {
        ...state,
        allGames: action.payload,
      };
    
      case SEARCH_BY_NAME_ERROR:
        return {
          ...state,
          searchError: action.payload, // almacenar el error de búsqueda en el estado
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
      const allGames2Original = state.allGamesOriginal;
      const allGames2 = state.allGames;
        if (action.payload ==='Asc'){
          allGames2.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase())  return 1 
              if (b.name.toLowerCase() > a.name.toLowerCase())  return -1 
              return  0;
            })}
        if (action.payload === 'Desc'){
         allGames2.sort(function (a, b) {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return  1;
              if (b.name.toLowerCase() < a.name.toLowerCase()) return  -1;
              return 0;
            })};
      return {
        ...state,
        allGames: action.payload === "All" ? allGames2Original : allGames2
      };

    case ORDER_BY_RATING:
      const allGames3Original = state.allGamesOriginal;
      const allGames3 = state.allGames;
      if(action.payload === 'Asc'){
         allGames3.sort(function (a, b) {
              if (a.rating > b.rating) return 1;
              if (b.rating > a.rating) return -1
              return 0;
            })}
      if(action.payload === 'Desc'){
           allGames3.sort(function (a, b) {
              if (a.rating < b.rating) return 1;
              if (b.rating < a.rating) return -1;
              return 0
            })};
      return {
        ...state,
        allGames: action.payload === "All" ? allGames3Original : allGames3
      };
      case ORDER_BY_PRICE:
      const allGames4Original = state.allGamesOriginal;
      const allGames4 = state.allGames;
      if(action.payload === 'Asc'){
         allGames4.sort(function (a, b) {
              if (a.price > b.price) return 1;
              if (b.price > a.price) return -1
              return 0;
            })}
      if(action.payload === 'Desc'){
           allGames4.sort(function (a, b) {
              if (a.price < b.price) return 1;
              if (b.price < a.price) return -1;
              return 0
            })};
      return {
        ...state,
        allGames: action.payload === "All" ? allGames4Original : allGames4
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
      const allGenresOriginal = state.allGamesOriginal;
      const withFilterPlatforms = state.filterPlataforms === 'All' ? allGenresOriginal : allGenresOriginal.filter(e => e.platforms.length > 0 && e.platforms.includes(state.filterPlataforms));
      const allGenres = action.payload === 'All' ? withFilterPlatforms : withFilterPlatforms.filter(e => e.genres.length > 0 && e.genres.includes(action.payload));
       return {
        ...state,
        allGames: allGenres,
        filterGenres: action.payload,
      };

      case FILTER_BY_PLATFORMS:
        const allPlatformsOriginal = state.allGamesOriginal;
        const withFilterGenres = state.filterGenres === 'All' ? allPlatformsOriginal : allPlatformsOriginal.filter(e => e.genres.length > 0 && e.genres.includes(state.filterGenres));
        const allPlatforms = action.payload === 'All' ? withFilterGenres : withFilterGenres.filter(e => e.platforms.length > 0 && e.platforms.includes(action.payload));
        
        return {
          ...state,
          allGames: allPlatforms,
          filterPlataforms: action.payload,
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
          
      case GET_USERS:
          return { ...state, users: action.payload, allUsers: action.payload, };

      case EMAIL_USER:
          return { ...state, emailUser: action.payload, };
      case GET_FAVORITES:
          return { ...state, favorites: [...state.favorites, action.payload] };     
      default: return { ...state }
  }
}

export default rootReducer;
