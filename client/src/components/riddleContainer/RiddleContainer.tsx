import React from 'react';
import Title from './Title';
import Question from './Question';
import { Container } from 'react-bootstrap';

function RiddleContainer() {
  return (
    <>
      <Container className="hero-container">
        <Title />
        <Question />
      </Container>
    </>
  );
}

export default RiddleContainer;
