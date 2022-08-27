import React from 'react';

function CardBody({title, description, url}) {
  return (
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <a href={url} className="btn btn-primary">Go somewhere</a>
    </div>
  );
}

export default CardBody;