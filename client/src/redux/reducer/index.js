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
  ADD_FAVORITES,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  // INCREMENT_QUANTITY,
  // DECREMENT_QUANTITY,
  CLEAR_CART,
  REMOVE_FAVORITE,
  CHARGE_IMAGE,
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
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  image: [],
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
              detail:[],
              allGames:[]
          }; 
          
      case GET_USERS:
          return { ...state, users: action.payload, allUsers: action.payload, };

      case EMAIL_USER:
        console.log(action.payload);
          return { ...state, emailUser: action.payload, };
      case ADD_FAVORITES:
          const favoriteGame = state.allGames.find(game => game.id === action.payload);
          const favoriteExist = state.favorites.find(game => game.id === action.payload);
          if (favoriteExist) {
            return { ...state }
          } else {
            const finalFavorites = [...state.favorites, favoriteGame];
            localStorage.setItem("favorites", JSON.stringify(finalFavorites));
            return { 
              ...state, 
              favorites: finalFavorites
            };
          };   
        case REMOVE_FAVORITE:
          const cleanFavorite = state.favorites.filter(fav => fav.id !== action.payload);
          localStorage.setItem("favorites", JSON.stringify(cleanFavorite));
          return { ...state, favorites: cleanFavorite };
          
      // case ADD_TO_CART:
      //   const existingGameIndex = state.cart.findIndex(game => game.id === action.payload);
      //     if (existingGameIndex !== -1) {
      //   // Si el juego ya está en el carrito, actualiza la cantidad
      //     const updatedCart = [...state.cart];
      //     updatedCart[existingGameIndex].quantity += 1;
      //     return {
      //      ...state,
      //       cart: updatedCart
      //     };
      //  } else {
      //  // Si el juego no está en el carrito, agrega un nuevo objeto de juego al carrito con cantidad 1
      //  const gameToAdd = state.allGames.find(game => game.id === action.payload);
      //      return {
      //       ...state,
      //       cart: [...state.cart, { ...gameToAdd, quantity: 1 }]
      //      };
      // }
      
      // case REMOVE_ALL_FROM_CART:
      //     return {
      //       ...state,
      //       cart: state.cart.filter(game => game.id !== action.payload)
      //     };
      
      // case REMOVE_ONE_FROM_CART:
      //    const gameToRemoveOne = state.cart.find(game => game.id === action.payload);
      //      if (gameToRemoveOne.quantity === 1) {
      //      const updatedCart = state.cart.filter(game => game.id !== action.payload);
      //       return {
      //       ...state,
      //       cart: updatedCart
      //        };
      //     } else {
      //      const updatedCart = state.cart.map(game => {
      //       if (game.id === action.payload) {
      //        return {
      //          ...game,
      //         quantity: game.quantity - 1
      //        };
      //      } else {
      //         return game;
      //          }
      //      });
      //     return {
      //      ...state,
      //       cart: updatedCart
      //     };
      //   }

      // case INCREMENT_QUANTITY:
      //   const gameToIncrement = state.cart.find(game => game.id === action.payload);
      //   const updatedCartIncrement = state.cart.map(game => {
      //     if (game.id === action.payload) {
      //       return {
      //         ...game,
      //         quantity: game.quantity + 1
      //         };
      //       } else {
      //         return game;
      //         }
      //     });
      //       return {
      //       ...state,
      //       cart: updatedCartIncrement
      //   };

      // case DECREMENT_QUANTITY:
      //   const gameToDecrement = state.cart.find(game => game.id === action.payload);
      //   if (gameToDecrement.quantity === 1) {
      //     const updatedCartDecrement = state.cart.filter(game => game.id !== action.payload);
      //     return {
      //       ...state,
      //       cart: updatedCartDecrement
      //     };
      //   } else {
      //   const updatedCartDecrement = state.cart.map(game => {
      //     if (game.id === action.payload) {
      //     return {
      //       ...game,
      //       quantity: game.quantity - 1
      //     };
      //     } else {
      //       return game;
      //     }
      //   });
      //    return {
      //      ...state,
      //      cart: updatedCartDecrement
      //     };
      //   }

      // case CLEAR_CART:
      //     return {
      //       ...state,
      //         cart: []
      //       };
  
    case ADD_TO_CART:
    const gameToAdd = state.allGames.find(game => game.id === action.payload);
    const gameInCart = state.cart.find(game => game.id === action.payload);
    if (gameInCart) {
      // Si el juego ya está en el carrito, no lo agrega de nuevo
      return state;
    } else {
      // Si el juego no está en el carrito, agrega un nuevo objeto de juego al carrito con cantidad 1
      const updatedCart = [...state.cart, { ...gameToAdd, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Almacena el carrito actualizado en Local Storage
      return {
        ...state,
        cart: updatedCart
      };
    }

    case REMOVE_FROM_CART:
      const updatedCart = state.cart.filter(game => game.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart
      };

    case CLEAR_CART:
      return {
        ...state,
         cart: []
      };

    case CHARGE_IMAGE:
      return{
        ...state,
        image: action.payload
      };
    
      
      
  default: return { ...state }
  }
}

export default rootReducer;
