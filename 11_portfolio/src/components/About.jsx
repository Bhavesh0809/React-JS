import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-5 text-primary">About Me</h2>
        <div className="row align-items-center">
          <div className="col-lg-4 text-center mb-4">
            <div className="profile-img-large shadow-lg rounded-circle mx-auto mb-4" style={{width: '250px', height: '250px'}}>
              <img src="https://via.placeholder.com/250x250/28a745/ffffff?text=Dev" className="img-fluid w-100 h-100" alt="About" />
            </div>
          </div>
          <div className="col-lg-8">
            <p className="lead text-muted fs-5 mb-4">
              Passionate developer with 3+ years experience building scalable web applications.
            </p>
            <div className="row mb-4">
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-geo-alt-fill text-primary fs-3 me-3"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Ahmedabad, India</h6>
                    <small className="text-muted">Available Worldwide</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <i className="bi bi-envelope-fill text-primary fs-3 me-3"></i>
                  <div>
                    <h6 className="fw-bold mb-1">your.email@example.com</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3"><h4 className="fw-bold text-primary">50+</h4><small className="text-muted">Projects</small></div>
              <div className="col-md-3"><h4 className="fw-bold text-primary">3+</h4><small className="text-muted">Years Exp</small></div>
              <div className="col-md-3"><h4 className="fw-bold text-primary">100%</h4><small className="text-muted">Satisfaction</small></div>
              <div className="col-md-3"><h4 className="fw-bold text-primary">24/7</h4><small className="text-muted">Available</small></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
