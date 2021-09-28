import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
// import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Raemarie Oatman",
      headerLinks: [
        {home: "Home", path: '/'},
        {about: "About Me", path: '/aboutme'},
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
      contact:  {
        title: "Contact Me!",
      }
    }
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" background="transparent" expand="lg">
            <NavbarBrand>Raemarie Oatman</NavbarBrand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle"/>
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/aboutme">About Me</Link>
                <Link className="nav-link" to="/contactme">Contact Me</Link>
              </Nav>
          </Navbar>

          <Route path="/" exact render={() =>
            <HomePage title={this.state.home.title} 
            subTitle={this.state.home.subTitle}
            text={this.state.home.text}
            />}
            />

          <Route path="/aboutme" render={() => 
            <AboutPage title={this.state.home.title}
            subTitle={this.state.aboutme.subTitle}
            text={this.state.aboutme.text}
          />}
          />

          <Route path="/contactme" render={() =>
            <ContactPage title={this.state.home.title}
            subTitle={this.state.contact.subTitle}
            text={this.state.contact.text}
            />}
            />



        </Container>
      </Router>
    )
  }
}
   

export default App;
