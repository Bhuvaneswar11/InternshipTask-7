
import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Innomatics Research Labs</h1>
          <p className="hero-description">
            Empowering the future with cutting-edge technology solutions. Discover our range of services, training, and innovative projects that drive success in the digital age.
          </p>
          <button className="hero-button">Explore Our Services</button>
        </div>
        <div className="hero-image">
          <img src="https://media.glassdoor.com/l/69/95/0d/aa/banner.jpg?signature=3eee1e9af4131d7dcb5e46c3f2eca663b564d1226d60f5f5a512dc229060f1fd" alt="Innovation at Innomatics" />
        </div>
      </div>
    </div>
  );
};

export default Home;
