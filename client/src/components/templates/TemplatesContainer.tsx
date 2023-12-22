import React from 'react';
import { Button, Carousel, Container, Modal } from 'react-bootstrap';
import Template from './Template';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

type Ribbon = {
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

type RibbonList = Ribbon[];

function TemplatesContainer() {
  // list of Ribbon templates
  const templates: RibbonList = [
    {
      title: 'Taylor Swift',
      photos: ['photo1', 'photo2', 'photo3'],
      riddles: [
        {
          type: 1, // going to use enum in the backend, 0 for short answer and 1 for multiple choice
          question: 'What is her name?',
          options: ['Taylor', 'Alex', 'Jordan', 'Kevin'],
          answer: 'Taylor',
        },
        {
          type: 1, // going to use enum in the backend, 0 for short answer and 1 for multiple choice
          question: 'What is her last name?',
          options: ['Swift', 'Daddabbo', 'Tab', 'James'],
          answer: 'Swift',
        },
      ],
      gift: 'Gift section',
      currentStage: 0, //enum on the backend, 0 for photos, 1 for riddle, 2 for gift
    },
    {
      title: 'Christmas',
      photos: ['photo4', 'photo5', 'photo6'],
      riddles: [
        {
          type: 1, // going to use enum in the backend, 0 for short answer and 1 for multiple choice
          question: 'What is her name?',
          options: ['Taylor', 'Alex', 'Jordan', 'Kevin'],
          answer: 'Taylor',
        },
        {
          type: 1, // going to use enum in the backend, 0 for short answer and 1 for multiple choice
          question: 'What is her last name?',
          options: ['Swift', 'Daddabbo', 'Tab', 'James'],
          answer: 'Swift',
        },
      ],
      gift: 'Gift section',
      currentStage: 0, //enum on the backend, 0 for photos, 1 for riddle, 2 for gift
    },
    {
      title: "Valentine's Day",
      photos: ['photo7', 'photo8', 'photo9'],
      riddles: [
        {
          type: 1, // going to use enum in the backend, 0 for short answer and 1 for multiple choice
          question: 'Who is your valentine?',
          options: ['Taylor', 'Alex', 'Jordan', 'Kevin'],
          answer: 'Taylor',
        },
        {
          type: 1, // going to use enum in the backend, 0 for short answer and 1 for multiple choice
          question: 'What is her last name?',
          options: ['Swift', 'Daddabbo', 'Tab', 'James'],
          answer: 'Swift',
        },
      ],
      gift: 'Gift section',
      currentStage: 0, //enum on the backend, 0 for photos, 1 for riddle, 2 for gift
    },
    {
      title: 'Custom',
      photos: ['photo10', 'photo11', 'photo12'],
      riddles: [
        {
          type: 1, // going to use enum in the backend, 0 for short answer and 1 for multiple choice
          question: 'Who is your valentine?',
          options: ['Taylor', 'Alex', 'Jordan', 'Kevin'],
          answer: 'Taylor',
        },
        {
          type: 1, // going to use enum in the backend, 0 for short answer and 1 for multiple choice
          question: 'What is her last name?',
          options: ['Swift', 'Daddabbo', 'Tab', 'James'],
          answer: 'Swift',
        },
      ],
      gift: 'Gift section',
      currentStage: 0, //enum on the backend, 0 for photos, 1 for riddle, 2 for gift
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Ribbon | null>(null);

  const handleTemplateClick = (template: Ribbon) => {
    setSelectedTemplate(template);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  function displayTemplates(templates: RibbonList): JSX.Element {
    return (
      <Row xs={2} className="g-2">
        {templates.map((template: Ribbon, index: number) => (
          <Col key={index} onClick={() => handleTemplateClick(template)}>
            <Template template={template} />
          </Col>
        ))}
      </Row>
    );
  }

  return (
    <Container className="hero-container">
      {displayTemplates(templates)}
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedTemplate?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Carousel for images */}
          <Carousel>
            {selectedTemplate?.photos.map((photo, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={photo}
                  alt={`Slide ${idx}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <p>
            This is a description of the template. Customize this text to
            provide more information about the template.
          </p>
          <Button variant="primary">
            {selectedTemplate?.title === 'Custom' ? 'Get Started' : 'Send'}
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default TemplatesContainer;
