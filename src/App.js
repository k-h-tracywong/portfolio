import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Tracy Wong',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ]
    }
  }

  render() {
    return (
       <Router>
           <Container fluid={true}>
               <Navbar className="border-bottom" expand="lg">
                   <Navbar.Brand>Tracy Wong</Navbar.Brand>
                   <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                   <Navbar.Collapse id="navbar-toggle">
                       <Nav className="ml-auto">
                           <Link className="nav-link" to='/'>Home</Link>
                           <Link className="nav-link" to='/about'>About</Link>
                           <Link className="nav-link" to='/contact'>Contact</Link>
                       </Nav>
                   </Navbar.Collapse>
               </Navbar>
               <Route exact path='/'>
                   <HomePage />
               </Route>
               <Route path='/about'>
                   <AboutPage />
               </Route>
               <Route path='/contact'>
                   <ContactPage />
               </Route>
               <Footer />
           </Container>
       </Router>
    );
  }
}

export default App;
