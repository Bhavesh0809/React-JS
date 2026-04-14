import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center pt-5" 
             style={{
               background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
               color: '#ffffff'
             }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-2 fw-bold mb-4" 
                style={{ 
                  color: '#ffffff', 
                  textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                  fontWeight: '900'
                }}>
              Hi, I'm <span style={{ color: '#ffffff', background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '50px' }}>YourName</span>
            </h1>
            <p className="lead fs-3 mb-5" style={{ 
              color: '#f8fafc', 
              fontWeight: '400',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}>
              Full Stack Developer | React Enthusiast | Problem Solver
            </p>
            <div>
              <a href="#projects" 
                 className="btn btn-light btn-lg px-5 me-3 mb-3 mb-md-0 shadow-lg"
                 style={{ 
                   background: 'rgba(255,255,255,0.95)', 
                   color: '#1e40af',
                   fontWeight: '600',
                   borderRadius: '50px'
                 }}>
                My Work
              </a>
              <a href="#contact" 
                 className="btn btn-outline-light btn-lg px-5 shadow-lg"
                 style={{ 
                   borderColor: 'rgba(255,255,255,0.9)', 
                   color: '#ffffff',
                   fontWeight: '600',
                   borderRadius: '50px'
                 }}>
                Hire Me
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="profile-img shadow-xl rounded-circle overflow-hidden mx-auto" 
                 style={{
                   width: '320px', 
                   height: '320px', 
                   border: '8px solid rgba(255,255,255,0.3)',
                   boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                 }}>
              <img 
                src="https://via.placeholder.com/320x320/ffffff/1e3a8a?text=You" 
                className="img-fluid w-100 h-100" 
                alt="Profile"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
