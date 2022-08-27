import React from 'react';
import Card from '../card';
import CardBody from '../card-body/card-body';

function CardWithImage(props) {
  return (
    <Card>
      <img src={props.img} className='card-img-top' alt='' />
      <CardBody {...props} />
    </Card>
  )
}

export default CardWithImage;