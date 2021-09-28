import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Raemarie Oatman",
      headerLinks: [
        {title: "Home", path: '/'},
        {about: "About", path: '/about'},
        {contact: "Contact Me", path: '/contactme'},
        {resume: "Resume", path: '/resume'}
      ],
      home:  {
        title: "Insert Title Here",
        subTitle: "Projects",
        comment: "Checkout my projects below"
      },
      about:  {
        title: "About Me",
        text: "All about me"
      },
      contactme:  {
        title: "Contact Me!",
      }
    }
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <NavbarBrand>Raemarie Oatman</NavbarBrand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle"/>
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About Me</Link>
              <Link className="nav-link" to="/contactme">Contact Me</Link>
            </Nav>
          </Navbar>

        </Container>
      </Router>
    )
  }
}
   

export default App;
