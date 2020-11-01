import React from "react";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  return (
    //BEM Convention
    <div className="app">
      <Header />
      <div className="app__body">
        <Feed />
        <Profile />
      </div>
    </div>
  );
}

export default App;
