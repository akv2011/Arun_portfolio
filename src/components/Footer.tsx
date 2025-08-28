import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/akv2011" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/arunkumar-v-3217322a4/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>© 2025 Arunkumar V - AI and Backend Engineer</p>
    </footer>
  );
}

export default Footer;