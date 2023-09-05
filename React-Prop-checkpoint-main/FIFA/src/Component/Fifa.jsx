import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Fifa({ image, name, age, team, nationality, number }) {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center bg-danger" style={{ minHeight: '100vh' }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image} style={{ height: '250px' }} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>{team}</Card.Title>
            <Card.Text>{nationality}</Card.Text>
            <Card.Text>{age}</Card.Text>
            <Card.Text>{number}</Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Fifa;