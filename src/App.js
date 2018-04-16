import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {  
  render() {
    const desc = "Go to function"  
      
    return (
      <Router basename={process.env.PUBLIC_URL + '/'}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Route exact={true} path="/" render={() => (
            <p className="App-intro">
              <Link to={'/fun'}>
                <button>{desc}</button>
              </Link>
            </p>
          )} /> 
          <Route exact={true} path="/fun" component={ExampleFun} />
        </div>
      </Router>
    );
  }
}

const ExampleFun = () => (
  <div>
    "Hello fun!"
  </div>
)

export default App;
