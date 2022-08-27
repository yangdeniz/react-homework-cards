import React from 'react';
import Card from '../card';
import CardBody from '../card-body/card-body';

function SimpleCard(props) {
  return (
    <Card>
      <CardBody {...props} />
    </Card>
  );
}

export default SimpleCard;