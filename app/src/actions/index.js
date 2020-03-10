import axios from "axios";

export const GET_GHIBLI_LOADING = "GET_GHIBLI_LOADING";
export const GET_GHIBLI_SUCCESS = "GET_GHIBLI_SUCCESS";
export const GET_GHIBLI_FAILED = "GET_GHIBLI_FAILED";

export const ghibliLoading = () => ({ type: GET_GHIBLI_LOADING });

export const ghibliLoadSuccess = data => ({
  type: GET_GHIBLI_SUCCESS,
  payload: data
});

export const ghibliLoadFailed = error => ({
  type: GET_GHIBLI_FAILED,
  payload: error
});

export const getGhibliFilms = () => {
  return function(dispatch) {
    dispatch(ghibliLoading());

    return axios
      .get(`https://ghibliapi.herokuapp.com/films`)
      .then(res => dispatch(ghibliLoadSuccess(res.data)))
      .catch(err => dispatch(ghibliLoadFailed(err.data)));
  };
};
