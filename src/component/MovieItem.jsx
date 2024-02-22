import React from 'react';

export default function MovieItem(props) {
  console.log(props.dataItem);

  return (
    <div className="movie-item" onClick={() => props.handleClick(props.dataItem)}>
      <div className="movie-item-content">
        <img src={props.dataItem.image} alt={props.dataItem.movieName} />
        <p className="episode">Episode {props.dataItem.episode}</p>
        <p className="name">{props.dataItem.movieName}</p>
      </div>
    </div>
  );
}