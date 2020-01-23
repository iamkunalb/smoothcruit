import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home  from './pages/Home.jsx';


// var perf =require('../public/template.html');;

class App extends Component {
  render() {
    return (
      <div>
        <div class="heading">
          <h1>&lt; / SMOOTHCRUIT &gt;</h1>
          {/* <h3>Making it easier for you to apply for jobs,</h3> */}
          {/* <h3>Making it simpler for you to hire candiadtes</h3> */}
        </div>
        <div class="loginBlock">
          <h1>Login</h1>
          <input placeholder="E-Mail Address"/>
          <input placeholder="Password"/>
          <br/>
          <button>Login</button>
          <p>Don't have an account? </p>
        </div>
      </div>
    );
  }
}

export default App;
