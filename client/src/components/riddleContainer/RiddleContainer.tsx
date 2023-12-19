import React from 'react';
// import Title from './Title';
import Question from './Question';
import { Button, Container } from 'react-bootstrap';
import { useState } from 'react';

type RiddleProps = {
  title: string;
  riddle: {
    type: number;
    question: string;
    options: string[];
    answer: string; //TODO: determine correct type
  };
  goToNextRiddle: () => void;
  goToNextStage: () => void;
};

function RiddleContainer(props: RiddleProps) {
  const [userInput, setUserInput] = useState(null);
  const { title, riddle, goToNextRiddle, goToNextStage } = props;

  function goToNextPage(
    goToNextRiddle: () => void,
    goToNextStage: () => void
  ) {}

  return (
    <Container>
      <h1>{title}</h1>
      <Question
        type={riddle.type}
        question={riddle.question}
        options={riddle.options}
        answer={riddle.answer}
        setUserInput={setUserInput}
      />
      <Button onClick={goToNextRiddle}>Next</Button>
    </Container>
  );
}

export default RiddleContainer;
