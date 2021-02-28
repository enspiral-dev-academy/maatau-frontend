import React from "react";
import logo from "./logo.svg";
import "./App.css";

import SignIn from "./SignIn";

function App(): React.ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>matatau incoming!</p>
        <p>It&apos;s a React app ;)</p>
        <SignIn />
      </header>
    </div>
  );
}

export default App;
