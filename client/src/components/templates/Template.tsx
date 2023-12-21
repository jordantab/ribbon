import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// TODO: create a global type Ribbon
type TemplateProps = {
  template: {
    title: string;
    photos: string[];
    riddles: {
      type: number;
      question: string;
      options: string[];
      answer: string;
    }[];
    gift: string;
    currentStage: number;
  };
};

function Template(template: TemplateProps): JSX.Element {
  return (
    <Container>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title>{template.template.title}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Template;
