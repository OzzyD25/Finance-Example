import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Main from './components/MainDirectory';
import About from './components/About';
import Services from './components/Services';
import Free from './components/Free';
import Contact from './components/Contact';
import ScrollUpButton from './components/effects/Scroll';
import Team from './components/Team';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ScrollUpButton />
        <NavBar />
        <Main />
        <About />
        <Services />
        <Free />
        <Team />
        <Contact />
      </React.Fragment>
    );
  }
}

export default App;


{/*
    Surge:
    finance-1st.surge.sh
    finance-example.surge.sh

*/}
