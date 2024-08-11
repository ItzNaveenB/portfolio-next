import React from "react";
import Image from 'next/image';
import vscode from './logos/visualstudio.svg'
import github from './logos/github.svg'
import prism from './logos/prism.svg'
import markdown from './logos/markdown.svg'
import mysql from './logos/mysql.svg'
import './SearchAnimation1.css';

const ScrollAnimation = () => {
  const logos = [vscode, github, mysql, prism, markdown];

  return (
    <div className="logos">
      <div className="logos-slide">
        {logos.map((logo, index) => (
          <Image

            key={index}
            src={logo}
            alt={`Logo ${index}`}
            
          />
        ))}
        {logos.map((logo, index) => (
          <Image
            
            key={index + logos.length}
            src={logo}
            alt={`Logo ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollAnimation;
