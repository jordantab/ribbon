import React from 'react';
import { Button, Container, Form, Stack } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';

// TODO: render the current question

type QuestionProps = {
  type: number;
  question: string;
  options: string[];
  // TODO: refactor next button
  answer: string;
  setUserInput: React.Dispatch<React.SetStateAction<null>>;
};

function Question(props: QuestionProps): JSX.Element {
  const { type, question, options, answer } = props;

  function displayOptions(type: number, options: string[]) {
    return type === 0 ? (
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Your Answer"
          aria-label="user-answer"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    ) : (
      options.map((option: string, index: number) => {
        // TODO: map to multiple choice inputs
        return (
          <div className="border" key={index}>
            {option}
          </div>
        );
      })
    );
  }

  return (
    <Container>
      <p className="border">{question}</p>
      {displayOptions(type, options)}
    </Container>
  );
}

export default Question;
