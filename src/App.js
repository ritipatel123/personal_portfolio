import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="logo">RP.</div>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <div className="hero">
          <h1>
            Hello, I'm <span className="highlight">Riti Patel.</span>
          </h1>
          <p>I'm a full stack developer.</p>
          <a href="#projects" className="btn">VIEW MY WORK</a>
        </div>
      </main>

      {/* About Section Placeholder */}
      <section id="about" className="section">
        <h2>About</h2>
        <p>This is where you will write about yourself, your background, and your interests.</p>
      </section>

      {/* Projects Section Placeholder */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <p>This will showcase your web, software, or school projects with links and images.</p>
      </section>

      {/* Contact Section Placeholder */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Get in touch with me at ritipatel2005@gmail.com or through LinkedIn.</p>
      </section>
    </div>
  );
}

export default App;
