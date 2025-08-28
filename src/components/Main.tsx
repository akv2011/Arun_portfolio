import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import profileImage from '../assets/images/profile.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImage} alt="Arunkumar V - AI and Backend Engineer" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/akv2011" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/arunkumar-v-3217322a4/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:arunkumarv1530@gmail.com"><EmailIcon/></a>
            <a href="tel:+919360011424"><PhoneIcon/></a>
          </div>
          <h1>Arunkumar V</h1>
          <p>AI and Backend Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/akv2011" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/arunkumar-v-3217322a4/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:arunkumarv1530@gmail.com"><EmailIcon/></a>
            <a href="tel:+919360011424"><PhoneIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;