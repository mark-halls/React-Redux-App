import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGhibliFilms } from "../../actions";
import FilmCard from "../FilmCard";

const Films = props => {
  const { getGhibliFilms } = props;
  useEffect(() => {
    const getFilms = async () => {
      await getGhibliFilms();
    };
    getFilms();
  }, [getGhibliFilms]);

  return (
    <div className="films">
      {props.isFetching && <div>Loading...</div>}
      {props.error && <div>{props.error.message}</div>}
      {props.films.map(film => (
        <FilmCard key={film.id} {...film} />
      ))}
    </div>
  );
};

export default connect(
  state => state,
  { getGhibliFilms }
)(Films);
