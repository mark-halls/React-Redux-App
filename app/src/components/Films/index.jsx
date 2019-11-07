import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGhibliFilms } from "../../actions";

const Films = props => {
  useEffect(() => props.getGhibliFilms(), []);

  return (
    <>
      {props.isFetching && <div>Loading...</div>}
      {props.error && <div>{props.error.message}</div>}
      {props.films.map(film => (
        <p key={film.id}>{film.title}</p>
      ))}
    </>
  );
};

export default connect(
  state => state,
  { getGhibliFilms }
)(Films);
