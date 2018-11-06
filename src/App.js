// in node js, it would be require/module.exports (if someone else requires package, the stuff inside would be all the methods and when person imports, it would be the const package = req("ekr") then package.methdo() and yadayada); the pairs here are iport/export 
import React, { Component } from 'react'; // base class from react library; this is importing certain parts of the module; runtime that react will run from this file
import logo from './giffyGif.gif';
import './App.css';
import Text from "./Text.jsx";

// with class syntax expand from component class, like grid class; class App is var name that can be used anywhere 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
          
          {/* values on attributes become props inside the component/render, and the props get used for things like styling */}
          <h1>Hello, <Text value="Michelle" color="orange" border="20px dotted magenta"/></h1>
          
          {/* these are their own obj */}
          <Text value="eosfnb" color="pink">testing</Text>
        </header>
      </div>
    );
  }
}

// import and export are pairs; ES6 module syntax
// export defaultl when importing, do the import Module from './filename' in some other file
export default App;