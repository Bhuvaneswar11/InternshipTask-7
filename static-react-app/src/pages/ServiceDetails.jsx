
import React from 'react';
import { useParams } from 'react-router-dom';
import './servicedetail.css';

const ServiceDetails = () => {
  const { serviceId } = useParams();

  // Sample data for demonstration; replace with real data or API fetch.
  const servicesData = {
    design: {
      title: 'Design Services',
      description: 'We offer a range of design services, including web design, UI/UX design, branding, and graphic design.',
      imageUrl: '/images/design-service.jpg',
    },
    development: {
      title: 'Development Services',
      description: 'Our development services cover front-end, back-end, full-stack, and mobile app development.',
      imageUrl: '/images/development-service.jpg',
    },
    marketing: {
      title: 'Marketing Services',
      description: 'We provide digital marketing, SEO, content creation, and social media management services.',
      imageUrl: '/images/marketing-service.jpg',
    },
  };

  const service = servicesData[serviceId] || {
    title: 'Service Not Found',
    description: 'The requested service does not exist.',
    imageUrl: '/images/not-found.jpg',
  };

  return (
    <div className="service-details-container">
      <img src={service.imageUrl} alt={service.title} className="service-image" />
      <div className="service-details-content">
        <h2 className="service-title">{service.title}</h2>
        <p className="service-description">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
