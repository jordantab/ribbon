import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import HamburgerMenu from './HamburgerMenu';
import Logo from './Logo';

export default function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
        <HamburgerMenu />
      </Container>
    </Navbar>
  );
}
