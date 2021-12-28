import React from 'react';
import './Footer.scss';

import { Navbar, Container } from 'react-bootstrap'

const Footer = () => (
  <Navbar fixed="bottom" expand="lg" bg="dark" variant="dark">
    <Container fluid>
      <Navbar.Text>
        Copyright - Yevhen Rozhylo (3CS-21) - 2021
      </Navbar.Text>
    </Container>
  </Navbar>
);

export default Footer;
