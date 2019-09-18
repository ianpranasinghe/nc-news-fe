import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Topics from "./components/Topics";
import Article from "./components/Article";

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Home path="/" />
        <Topics path="topics/:topic" />
        <Article path="topics/:topic/:article_id" />
        <Article path="/:article_id" />
      </Router>
    </>
  );
}

export default App;
