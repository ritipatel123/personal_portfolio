import React from "react";
import "./App.css"; // or your custom CSS

function Home() {
  return (
    <div className="App">
      <header>
        <div className="logo">RP.</div>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <div className="hero">
          <h1>
            Hello, I'm <span className="highlight">Riti Patel.</span>
          </h1>
          <p>I'm a full stack developer.</p>
          <a href="#projects" className="btn">
            View My Work
          </a>
        </div>
        <div className="background-globe"></div>
      </main>
    </div>
  );
}

export default Home;
