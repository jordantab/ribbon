import React from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

type GiftProps = {
  gift: string;
};
function Gift(props: GiftProps): JSX.Element {
  const { gift } = props;

  const navigate = useNavigate();

  const redirectToTemplates = (): void => {
    navigate('/ribbons/templates');
  };

  return (
    <Container>
      {gift}
      <InputGroup>
        <Form.Control
          placeholder="Email"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Button onClick={redirectToTemplates}>Start Sending</Button>
    </Container>
  );
}

export default Gift;
