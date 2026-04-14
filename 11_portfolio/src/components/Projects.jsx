import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full stack e-commerce app with payment integration.",
      tech: "React, Node.js, MongoDB, Stripe",
      image: "https://via.placeholder.com/400x250/28a745/white?text=E-Commerce",
      link: "#"
    },
    {
      title: "Task Manager",
      description: "Real-time collaborative task manager with drag & drop.",
      tech: "React, Socket.io, Express",
      image: "https://via.placeholder.com/400x250/17a2b8/white?text=Task+Manager",
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather app with forecasts and charts.",
      tech: "React, OpenWeather API, Chart.js",
      image: "https://via.placeholder.com/400x250/6f42c1/white?text=Weather",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-5 text-primary">My Projects</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <img src={project.image} className="card-img-top" alt={project.title} style={{height: '200px', objectFit: 'cover'}} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  <p className="text-muted small mb-3">{project.tech}</p>
                  <a href={project.link} className="btn btn-primary mt-auto">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
