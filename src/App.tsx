import React from "react";
import { Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import SignIn from "./SignIn";

function App(): React.ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>matatau incoming!</p>
        <SignIn />
      </header>
    </div>
  );
}

export default App;
