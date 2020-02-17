import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation: React.FC = () => {
   return (
      <Navbar bg="info" expand="lg" className="fixed-top">
         <Container>
            <Navbar.Brand>
               <Link to="/">SCALED FLOW &reg;</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ml-auto">
                  <Link className="navlink" to="/test">
                     TEST
                  </Link>
                  <Link className="navlink" to="/about">
                     ABOUT
                  </Link>
                  <Link className="navlink" to="/assessments">
                     ASSESSMENTS
                  </Link>
                  <Link className="navlink" to="/coaching">
                     COACHING
                  </Link>
                  <Link className="navlink" to="/training">
                     TRAINING
                  </Link>
                  <Link className="navlink" to="/trends">
                     TRENDS
                  </Link>
                  <Link className="navlink" to="/contact">
                     CONTACT
                  </Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default Navigation;
