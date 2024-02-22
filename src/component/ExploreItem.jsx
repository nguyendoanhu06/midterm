import React from 'react';

export default function ExploreItem(props) {
  console.log(props.data);

  return (
    <div className="explore-item-container">
      <div className="explore-item-image">
        <img src={props.data.image} alt={props.data.movieName} />
      </div>
      <div className="explore-item-info">
        <div className="explore-item-describe">{props.data.description}</div>
      </div>
    </div>
  );
}      