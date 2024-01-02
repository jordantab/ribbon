import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import RiddleContainer from '../riddleContainer/RiddleContainer';
import PhotoAlbum from '../photoAlbum/PhotoAlbum';
import Gift from '../gift/Gift';

// TODO: fetch Ribbon object

function RibbonContainer() {
  const tempRibbon = {
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
  };

  const [currentStage, setCurrentStage] = useState(0);
  const [currentRiddleIndex, setcurrentRiddleIndex] = useState(0);
  const [ribbonData, setRibbonData] = useState(tempRibbon);

  function goToNextStage() {
    if (currentStage < 2) {
      setCurrentStage(currentStage + 1);
    }
  }

  function goToPreviousStage() {}

  function displayCurrentRiddle(): JSX.Element {
    const currentRiddle = ribbonData.riddles[currentRiddleIndex];
    return (
      // TODO: conditionally pass in the next function
      <RiddleContainer
        title={ribbonData.title}
        riddle={currentRiddle}
        goToNextRiddle={goToNextRiddle}
      />
    );
  }

  function goToNextRiddle() {
    // TODO: add answer validation
    if (currentRiddleIndex < ribbonData.riddles.length - 1) {
      setcurrentRiddleIndex(currentRiddleIndex + 1);
    } else {
      setCurrentStage(currentStage + 1);
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
        return displayCurrentRiddle();
      case 2:
        return <Gift gift={ribbonData.gift} />;
      default:
        return <div>Loading...</div>;
    }
  }

  return (
    <Container className="hero-container">{renderCurrentStage()}</Container>
  );
}

export default RibbonContainer;
