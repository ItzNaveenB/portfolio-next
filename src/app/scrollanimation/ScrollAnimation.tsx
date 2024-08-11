import React from "react";
import Image from 'next/image';
import Rubyrails from './logos/images-removebg-preview.svg';
import postgressSql from './logos/postgresql.svg';
import javascript from './logos/javascript.svg';
import typescript from './logos/typescript.svg';
import ruby from './logos/ruby-programming-language.svg';
import golang from './logos/Go-Logo_Black.svg';
import './SearchAnimation.css';

const ScrollAnimation = () => {
  const logos = [javascript, typescript, postgressSql, ruby, Rubyrails, golang];

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
