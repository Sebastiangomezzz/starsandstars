import axios from "axios";

function internalServerError(err) {
  return {
   status: false,
   errorMessage: "Internal server error. Please check your server",
 };
}

function successStatus(res) {
 return {
   status: true,
   data: res.data,
 };
}

const favoritesService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/favorites`,
});

export function constellation(Id, favorite) {
  console.log(favorite, Id)
    return favoritesService
      .put(`/${Id}`, favorite)
      .then(successStatus)
      .catch(internalServerError);
  
}

const arrayOfFavoritesService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/myconstellations`,
});

export function arrayOfFavorites(Id)  {
 return arrayOfFavoritesService
    .get(`/${Id}`)
    .then(successStatus)
    .catch(internalServerError);
}