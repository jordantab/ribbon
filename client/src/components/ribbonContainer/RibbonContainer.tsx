import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import RiddleContainer from '../riddleContainer/RiddleContainer';
import PhotoAlbum from '../photoAlbum/PhotoAlbum';

// TODO: fetch Ribbon object

function RibbonContainer() {
  const tempRibbon = {
    title: 'Taylor Swift',
    type: 1, // going to use enum in the backend, 0 for short answer and 1 for multiple choice
    photos: ['photo1', 'photo2', 'photo3'],
    riddles: [
      {
        question: 'What is her name?',
        options: ['Taylor', 'Alex', 'Jordan', 'Kevin'],
        answer: 'Taylor',
      },
      {
        question: 'What is her last name?',
        options: ['Swift', 'Daddabbo', 'Tab', 'James'],
        answer: 'Swift',
      },
    ],
    gift: 'Gift',
    currentStage: 0, //enum on the backend, 0 for photos, 1 for riddle, 2 for gift
    currentRiddle: 0,
  };
  const [currentStage, setCurrentStage] = useState(0);
  const [currentRiddle, setCurrentRiddle] = useState(0);
  const [ribbonData, setRibbonData] = useState(tempRibbon);

  function goToNextStage() {
    if (currentStage < 2) {
      setCurrentStage(currentStage + 1);
    }
  }

  function goToPreviousStage() {}

  function goToNextRiddle() {
    if (currentRiddle + 1 < ribbonData.riddles.length - 1) {
      setCurrentRiddle(currentRiddle + 1);
    }
  }
  function goToPreviousRiddle() {}

  function renderCurrentStage() {
    switch (currentStage) {
      // TODO: add a page before the photos and a page before the treasure hunt
      case 0:
        return (
          <PhotoAlbum
            photos={ribbonData.photos}
            goToNextStage={goToNextStage}
          />
        );
      case 1:
        return <RiddleContainer />;
      case 2:
      // return <Gift gift={ribbonData.gift} />;
      default:
        return <div>Loading...</div>;
    }
  }

  return (
    <Container className="hero-container">{renderCurrentStage()}</Container>
  );
}

export default RibbonContainer;
