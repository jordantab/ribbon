import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function TempButton() {
  const navigate = useNavigate();

  const handleRedirect = (): void => {
    navigate('/ribbons/tswift/');
  };

  return <Button onClick={handleRedirect}>Get Started!</Button>;
}

export default TempButton;
