import {
  GET_GHIBLI_LOADING,
  GET_GHIBLI_SUCCESS,
  GET_GHIBLI_FAILED
} from "../actions";

const initialState = {
  films: [],
  error: null,
  isFetching: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GHIBLI_LOADING: {
      return {
        ...state,
        isFetching: true,
        error: null
      };
    }

    case GET_GHIBLI_SUCCESS: {
      return {
        ...state,
        films: action.payload,
        isFetching: false,
        error: null
      };
    }

    case GET_GHIBLI_FAILED: {
      return {
        ...state,
        films: [],
        isFetching: false,
        error: action.payload
      };
    }

    default:
      return state;
  }
};

export default reducer;
