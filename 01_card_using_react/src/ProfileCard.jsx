import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import proImg from "./assets/profile.jpg";



const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4aKQqBBKCnD7KDC7vodrdnJsAhVYQREzDgw&s" alt="Profile" className="profile-img" />
      <h2 className="profile-name">Hrithik Roshan</h2>
      <p className="profile-title">Full Stack Developer</p>
      <p className="profile-email">hrithikroshan@gmail.com</p>
      <p className="profile-phone">91046605**</p>
      <div className="profile-icons">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      </div>
    </div>
  );
};

export default ProfileCard;
