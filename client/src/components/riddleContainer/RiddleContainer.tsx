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
};

function RiddleContainer(props: RiddleProps) {
  const [userInput, setUserInput] = useState(null);
  const { title, riddle, goToNextRiddle } = props;

  // TODO: function to validate user input
  function checkUserInput() {}

  // TODO: logic to call this function also update function to be conditional
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
