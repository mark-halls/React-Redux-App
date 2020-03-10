import React from "react";

const FilmCard = props => {
  return (
    <div className="film-card">
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>Release: {props.release_date}</p>
      <p>Producer: {props.producer}</p>
    </div>
  );
};

export default FilmCard;
