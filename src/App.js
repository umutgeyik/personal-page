import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/Projects';
import logo from './assets/images/UG.png';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Umut Geyik',
      headerLinks: [
        { title: 'Home', path:'/'},
        { title: 'Projects', path:'/projects' },
        { title: 'About', path:'/about'},
        { title: 'Contact', path:'/contact'},
      ],
      home: {
        title: 'Umut Geyik',
        subTitle: 'Software Engineer',
        text: 'Personal Page'
      },
      projects:{
        title: 'Umut GeyikSDSD',
        subTitle: 'SANANE',
        text: 'HOOOP'
      },
      about: {
        title: 'ABOUT ME'
      },
      contact: {
        title: 'CONTACT ME'
      },
      
    }
  }

  render(){
    return (
    <Router>
      <Container className="p-60" fluid={true}>
        <Navbar className="border-bottom" bg="transparent" expand="lg" >
        <Navbar.Brand>
          <a href="/">
          <img src={logo} style={{width:45}} />
          </a>
        </Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto" >
              <Link className = "nav-link" to="/">Home</Link>
              <Link className = "nav-link" to="/projects">Projects</Link>
              <Link className = "nav-link" to="/about">About</Link>
              {/* <Link className = "nav-link" to="/contact">Contact</Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact render={ () => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
        <Route path="/projects" exact render={ () => <ProjectsPage title={this.state.projects.title} subTitle={this.state.projects.subTitle} text={this.state.projects.text}/>} />
        <Route path="/about" exact render={ () => <AboutPage title={this.state.home.title} />} />
        {/* <Route path="/contact" exact render={ () => <ContactPage title={this.state.home.title} />} /> */}
        <Footer className="footer"/>
      </Container>  
    </Router>
  );
  }
  
}

export default App;
