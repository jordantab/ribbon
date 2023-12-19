import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Logo from './Logo';
import TempButton from '../../TempButton';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
        {location.pathname === '/' && <TempButton />}
      </Container>
    </Navbar>
  );
}
