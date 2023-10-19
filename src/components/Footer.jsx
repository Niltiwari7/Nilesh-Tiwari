import React from 'react';
import {   IoLogoLinkedin} from 'react-icons/io';
import LeetCodeIcon from './LeetCodeIcon';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://leetcode.com/nilestiwari_7/" target='_blank'>
          <LeetCodeIcon width={35} height={35} color="#FFA726" />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://github.com/Niltiwari7" target='_blank'>
          <FaGithub size={40} />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://www.linkedin.com/in/nilesh-tiwari-bbb685215/" target='_blank'>
            <IoLogoLinkedin />
          </a>
        </li>
       
      </ul>
      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link" href="#home">Home</a>
        </li>
        
        <li className="menu__item">
          <a className="menu__link" href="#work">Project</a>
        </li>
       
        <li className="menu__item">
          <a className="menu__link" href="#contact">Contact</a>
        </li>
      </ul>
      <p>&copy;2023 Nilesh Tiwari | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
