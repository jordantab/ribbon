import React from 'react';
import { Button, Container, Form, Stack } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';

// TODO: render the current question

function Question(): JSX.Element {
  return (
    <Container>
      <Stack gap={5}>
        <p>
          Which iconic Taylor Swift album, released in 2014, features hit songs
          like 'Shake It Off' and 'Blank Space'?
        </p>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Your Answer"
            aria-label="user-answer"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        {/* <Button onClick={handleRedirect}>Next</Button> */}
      </Stack>
    </Container>
  );
}

export default Question;
