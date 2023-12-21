import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

type PhotoProps = {
  source: string;
};

function Photo(props: PhotoProps) {
  const { source } = props;
  return (
    <Container>
      <Card>
        {/* <Card.Img variant="top" src={source} /> */}
        <Card.Body>
          <Card.Title>{source}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Photo;
