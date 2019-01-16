import React, { Component } from 'react';
import { 
    BrowserRouter as Router, 
    Route, 
    Link 
} from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>
          <Route exact path='/' component={HomeComponent}></Route>
          <Route exact path='/about' component={AboutComponent}></Route>
          <Route exact path='/contact' component={ContactComponent}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
