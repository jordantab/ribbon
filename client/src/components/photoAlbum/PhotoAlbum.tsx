import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Photo from './Photo';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

type PhotoAlbumProps = {
  photos: string[];
  goToNextStage: () => void;
};

function PhotoAlbum(props: PhotoAlbumProps) {
  const { photos, goToNextStage } = props;
  // TODO: update type of photos
  function displayPhotos(photos: any): JSX.Element {
    return (
      <Container>
        <Row xs={2} className="g-2">
          {photos.map((photo: string, index: number) => (
            <Col key={index}>
              <Photo source={photo} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  return (
    <Container>
      {displayPhotos(photos)}
      <Button onClick={goToNextStage}>Next</Button>
    </Container>
  );
}
export default PhotoAlbum;
