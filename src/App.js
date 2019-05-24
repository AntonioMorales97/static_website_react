import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <AppNavbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
