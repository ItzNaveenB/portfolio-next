import React from "react";
import Image from 'next/image';
import M3 from './logos/3m.svg';
import barstoolStore from './logos/barstool-store.svg';
import budweiser from './logos/budweiser.svg';
import buzzfeed from './logos/buzzfeed.svg';
import forbes from './logos/forbes.svg';
import macys from './logos/macys.svg';
import './SearchAnimation.css';

const ScrollAnimation = () => {
  const logos = [M3, barstoolStore, budweiser, buzzfeed, forbes, macys];

  return (
    <div className="logos">
      <div className="logos-slide">
      {logos.map((logo, index) => (
          <Image key={index} src={logo} alt={`Logo ${index}`} />
        ))}
        {logos.map((logo, index) => (
          <Image key={index + logos.length} src={logo} alt={`Logo ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ScrollAnimation;
