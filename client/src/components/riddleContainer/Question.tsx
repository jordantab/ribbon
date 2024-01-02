import React from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  ToggleButtonGroup,
  ToggleButton,
} from 'react-bootstrap';
import { useState } from 'react';

// TODO: render the current question

type QuestionProps = {
  type: number;
  question: string;
  options: string[];
  // TODO: refactor next button
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
};

function Question(props: QuestionProps): JSX.Element {
  const { type, question, options, setUserInput } = props;
  const [selectedOption, setSelectedOption] = useState('');

  function handleOptionChange(val: string) {
    setSelectedOption(val);
    setUserInput(val);
  }
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
        return (
          <Col key={index} className="mb-2">
            <ToggleButton
              type="radio"
              variant="outline-secondary"
              name="options"
              id={`radio-${index}`}
              checked={selectedOption === option}
              value={option}
              onChange={(e) => handleOptionChange(e.currentTarget.value)}
              className="w-100"
            >
              {option}
            </ToggleButton>
          </Col>
        );
      })
    );
  }

  return (
    <Container>
      <p className="border">{question}</p>
      {displayOptions(type, options)}
      <ToggleButtonGroup
        type="radio"
        name="options"
        onChange={setUserInput}
      ></ToggleButtonGroup>
    </Container>
  );
}

export default Question;
