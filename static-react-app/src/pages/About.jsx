
import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Innomatics Research Labs</h1>
        <p className="about-description">
          Innomatics Research Labs is a leading provider of innovative technology solutions, specializing in data science, artificial intelligence, machine learning, and software development. Our mission is to empower businesses with state-of-the-art technology to drive efficiency, productivity, and growth.
        </p>
        <p className="about-description">
          With a team of dedicated professionals, we focus on delivering high-quality training and consultancy services. Our approach combines cutting-edge research, technical expertise, and practical experience to meet the demands of a fast-evolving tech landscape.
        </p>
        <p className="about-description">
          Join us on our journey to redefine the future of technology and discover how we can help you achieve your goals.
        </p>
      </div>
      <div className="about-image">
        <img src="https://i.ytimg.com/vi/ZaS5fD34dGM/maxresdefault.jpg" alt="Innomatics Research Labs" />
      </div>
    </div>
  );
};

export default About;
