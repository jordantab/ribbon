import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Photo from './Photo';

type PhotoAlbumProps = {
  photos: string[];
  goToNextStage: () => void;
};

function PhotoAlbum({ photos, goToNextStage }: PhotoAlbumProps) {
  function displayPhotos(photos: any): JSX.Element {
    return photos.map((photo: string, index: number) => {
      return <Photo key={index} source={photo} />;
    });
  }
  return (
    <>
      <Container>
        {displayPhotos(photos)}
        <Button onClick={goToNextStage}>Next</Button>
      </Container>
    </>
  );
}
export default PhotoAlbum;
