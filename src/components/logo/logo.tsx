import { Link } from 'react-router-dom';
import React from 'react';

interface LogoProps {
  isFooter?: boolean;
}

function Logo({ isFooter = false }: LogoProps): React.JSX.Element {
  return (
    <Link 
      to="/" 
      className={isFooter ? 'footer__logo-link' : 'header__logo-link'}
    >
      <img 
        className={isFooter ? 'footer__logo' : 'header__logo'} 
        src="img/logo.svg" 
        alt="FloraDream logo" 
        width={isFooter ? 64 : 81} 
        height={isFooter ? 33 : 41} 
      />
    </Link>
  );
}

export default Logo;
