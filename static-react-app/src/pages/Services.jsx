
import React from 'react';
import { Link } from 'react-router-dom';
import './service.css';

const Service = () => {
  const services = [
    { id: 'design', name: 'Design Services', description: 'Creative web and graphic design services.' },
    { id: 'development', name: 'Development Services', description: 'Web and mobile app development.' },
    { id: 'marketing', name: 'Marketing Services', description: 'Digital marketing and SEO services.' },
  ];

  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h3 className="service-name">{service.name}</h3>
            <p className="service-description">{service.description}</p>
            <Link to={`/services/${service.id}`} className="service-link">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
