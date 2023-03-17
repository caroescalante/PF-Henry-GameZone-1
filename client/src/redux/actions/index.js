import {
  SEARCH_BY_NAME,
  GET_GAMES,
  FILTER_BY_GENRE,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
  GET_DETAIL,
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
    return error;
  }
   
  };
}



export function filterByCategory(value) {
  return {
    type: FILTER_BY_GENRE,
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