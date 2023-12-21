import React from 'react';
import { Container, Modal } from 'react-bootstrap';
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
      <Container>
        <Row xs={2} className="g-2">
          {templates.map((template: Ribbon, index: number) => (
            <Col key={index} onClick={() => handleTemplateClick(template)}>
              <Template template={template} />
            </Col>
          ))}
        </Row>
        <Modal
          show={showModal}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop="static"
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedTemplate?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Display template details here */}
            {/* Example: <p>{selectedTemplate?.description}</p> */}
          </Modal.Body>
        </Modal>
      </Container>
    );
  }

  return (
    <Container className="hero-container">
      {displayTemplates(templates)}
    </Container>
  );
}

export default TemplatesContainer;
