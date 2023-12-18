import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  );
}

export default App;
