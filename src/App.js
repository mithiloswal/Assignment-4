import React, { Component } from 'react';
import
{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './Assets/css/default.min.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import About from './components/pages/about';
import Apple from './components/pages/apple';
import Oneplus from './components/pages/oneplus';
import Samsung from './components/pages/samsung';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

      <Header />

      <Route exact path='/' component={Homepage} />
      <Route exact path='/About' component={About} />
      <Route exact path='/Apple' component={Apple} />
      <Route exact path='/Oneplus' component={Oneplus} />
      <Route exact path='/Samsung' component={Samsung} />

      <Footer />

      </div>
      </Router>
    );
  }
}

export default App;
