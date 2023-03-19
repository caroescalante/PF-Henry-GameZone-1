import {
  SEARCH_BY_NAME,
  GET_GAMES,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
  GET_GENRES,
  GET_PLATFORMS,
  FILTER_BY_GENRES,
  FILTER_BY_PLATFORMS,
  GET_DETAIL,
  CLEAR_DETAIL,
  GET_USERS,
  ORDER_BY_PRICE
} from "./types";

import axios from 'axios';

export function getGames() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/videogames");
    return dispatch({
      type: GET_GAMES,
      payload: json.data,
    });
  };
}

export function searchByName(name) {
  return async function (dispatch) {
  try {
    let json = await axios.get(`http://localhost:3001/name?name=${name}`);
    return dispatch({
      type: SEARCH_BY_NAME,
      payload: json.data,
    });
  } catch (error) {
    alert('The wanted videogame does not exist')
  }
   
  };
}


export function getGenres(){
  return async function(dispatch){
      let infoGen = await axios.get("http://localhost:3001/genres",{})   //generos
      return dispatch({type: GET_GENRES, payload: infoGen.data})
  }
}


export function getPlatforms(){
  return async function(dispatch){
      let infoPlat = await axios.get("http://localhost:3001/platform",{})   //plataformas 
      return dispatch({type: GET_PLATFORMS, payload: infoPlat.data})
  }
}



export function filterByGenres(value) {
  return {
    type: FILTER_BY_GENRES,
    payload: value,
  };
}

export function filterByPlatforms(value) {
  return {
    type: FILTER_BY_PLATFORMS,
    payload: value,
  };
}

export function orderByName(value) {
  return {
    type: ORDER_BY_NAME,
    payload: value,
  };
}

export function orderByRating(value) {
  return {
    type: ORDER_BY_RATING,
    payload: value,
  }
}
export function orderByPrice(value) {
  return {
    type: ORDER_BY_PRICE,
    payload: value,
  }
}

export function getDetail(id){
  return async function(dispatch){
      try {
          var json = await axios.get("http://localhost:3001/videogames/"+ id);
          return dispatch({
              type: GET_DETAIL,
              payload:json.data
          })
      } catch(error) {
          alert('The wanted videogame does not exist')
      }
  }
}
export function clearDetail(){
  return {
    type: CLEAR_DETAIL,
  }
}

export function getUsers(){
  return async function (dispatch) {
    try {
      const users = await axios.get('http://localhost:3001/user');
      return dispatch({ type: GET_USERS, payload: users.data})

    } catch ( error ) {
      return console.log("Something went wrong. Please try again.", error.message)
    }
  }
};