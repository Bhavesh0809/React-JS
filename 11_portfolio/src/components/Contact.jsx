import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Message sent (demo)`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-5 text-primary">Get In Touch</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-4">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <textarea
                  className="form-control form-control-lg"
                  rows="5"
                  placeholder="Tell me about your project..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg px-5">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-md-2 text-center">
            <a href="#" className="text-decoration-none d-block mb-3">
              <i className="bi bi-github fs-1 text-dark"></i>
            </a>
          </div>
          <div className="col-md-2 text-center">
            <a href="#" className="text-decoration-none d-block mb-3">
              <i className="bi bi-linkedin fs-1 text-primary"></i>
            </a>
          </div>
          <div className="col-md-2 text-center">
            <a href="#" className="text-decoration-none d-block mb-3">
              <i className="bi bi-twitter fs-1 text-info"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
