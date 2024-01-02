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
  const [userInput, setUserInput] = useState('');
  const { title, riddle, goToNextRiddle } = props;

  function validateUserInput() {
    userInput === riddle.answer
      ? goToNextRiddle()
      : // TODO: change this to an alert to the user
        console.log('incorrect answer');
  }

  return (
    <Container>
      <h1>{title}</h1>
      <Question
        type={riddle.type}
        question={riddle.question}
        options={riddle.options}
        setUserInput={setUserInput}
      />
      <Button onClick={validateUserInput} className="w-100">
        Next
      </Button>
    </Container>
  );
}

export default RiddleContainer;
