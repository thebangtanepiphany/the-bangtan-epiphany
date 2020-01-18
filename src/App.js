import React, { useState } from "react";
import twitter from "./twitter.svg"
import twitterHover from "./twitter-hover.svg"
import "./App.css";

function App() {
  const [social, setSocial] = useState(twitter);
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <a href="#about-us">About us</a>
          </li>
          <li>
            <a href="#episodes">Episodes</a>
          </li>
        </ul>
      </header>
      <section className="header">
        <h1>The Bangtan Epiphany Podcast</h1>
      </section>
      <section className="about-us" id="about-us">
        <h2>About us</h2>
        <p>BTS will blow your mind</p>
      </section>
      <section className="podcast-episodes" id="episodes">
        <h2>Episodes</h2>
      </section>
      <footer>
        <div>&copy; 2020</div>
        <div className="social">
          <a href="https://www.twitter.com/btsepiphanypod" target="_blank" rel="noopener noreferrer">
            <img 
              src={social}
              alt="Twitter Icon"
              onMouseEnter={() => setSocial(twitterHover)}
              onMouseLeave={() => setSocial(twitter)}
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
