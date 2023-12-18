import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Logo from './Logo';
import TempButton from '../../TempButton';

export default function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
        <TempButton />
      </Container>
    </Navbar>
  );
}
