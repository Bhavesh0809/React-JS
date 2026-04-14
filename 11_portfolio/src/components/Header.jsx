import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top py-2 transition-all ${scrolled ? 'bg-primary shadow-lg' : 'bg-transparent'}`}>
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#home">YourName</a>
        <button 
          className="navbar-toggler" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link px-3" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
