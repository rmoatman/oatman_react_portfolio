import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Nav from "react-bootstrap/Nav";
import Footer from "./component/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Resume from "./assets/Oatman_Raemarie.pdf";

library.add(fab, faEnvelope, faGithub, faLinkedin, faTwitter);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Raemarie Oatman",
      headerLinks: [
        { home: "Home", path: "/oatman_react_portfolio" },
        { about: "About Me", path: "/aboutme" },
        { contact: "Contact Me", path: "/contact" },
      ],
      home: {
        title: "Full-Stack Web Developer",
        subTitle: "Clean and thoughtful design",
        comment: " ",
      },
      about: {
        title: "About Me",
        text: "All about me",
      },
      contact: {
        title: "Contact Me!",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar
            className=" fw-bold p-5 border-bottom"
            bg="primary"
            variant="dark"
            expand="lg"
          >
            <NavbarBrand className="fs-1">Raemarie Oatman</NavbarBrand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle" />
            <Nav className="ml-auto">
              <Link className="nav-link fs-3 p-4" to="/">
                Home
              </Link>
              <Link className="nav-link fs-3 p-4" to="/aboutme">
                About Me
              </Link>
              <Link className="nav-link fs-3 p-4" to="/contact">
                Contact Me
              </Link>

              <Navbar.Text className="nav-link fs-3 p-4">
                <a href={Resume} target="__blank" className="text-decoration-none" >Resume</a>
              </Navbar.Text>

            </Nav>
          </Navbar>

          <Route
            path="/oatman_react_portfolio"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                comment={this.state.home.comment}
              />
            )}
          />

          <Route
            path="/aboutme"
            exact
            render={() => (
              <AboutPage
                title={this.state.home.title}
                text={this.state.about.text}
              />
            )}
          />

          <Route
            path="/contact"
            exact
            render={() => <ContactPage title={this.state.home.title} />}
          />
          
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
