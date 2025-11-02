import React from 'react';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  return (
    <header className="absolute w-full z-10 flex items-center justify-between px-4 py-6 md:px-12">
      <div className="netflix-logo">
        <svg 
          viewBox="0 0 111 30" 
          className="w-24 md:w-36 fill-[#e50914]" 
          aria-hidden="true" 
          focusable="false"
        >
          <g>
            <path d="M105.06 14.28L111 1.41 104.74 1.41 103.13 7.28 99.64 1.41 93.37 1.41 98.45 9.84 93.52 22.76 99.66 22.76 101.43 15.62 105.31 22.76 111 22.76 105.06 14.28z"></path>
            <path d="M90.25 14.28L90.25 1.41 84.13 1.41 84.13 22.76 90.25 22.76 90.25 14.28z"></path>
            <path d="M81.98 22.76L81.98 1.41 75.87 1.41 75.87 22.76 81.98 22.76z"></path>
            <path d="M64.26 1.41L64.26 22.76 70.26 22.76 70.26 10.49 72.83 10.49 72.83 4.53 70.26 4.53 70.26 1.41 64.26 1.41z"></path>
            <path d="M50.11 1.41L50.11 7.37 53.01 7.37 53.01 22.76 59.02 22.76 59.02 7.37 61.92 7.37 61.92 1.41 50.11 1.41z"></path>
            <path d="M46.8 22.76L46.8 16.8 44.31 16.8 44.31 22.76 46.8 22.76z"></path>
            <path d="M35.72 7.37L38.62 7.37 38.62 1.41 26.82 1.41 26.82 7.37 29.72 7.37 29.72 22.76 35.72 22.76 35.72 7.37z"></path>
            <path d="M13.15 4.53L13.15 22.76 19.15 22.76 19.15 10.49 21.72 10.49 21.72 4.53 19.15 4.53 19.15 1.41 13.15 1.41 13.15 4.53z"></path>
            <path d="M4.66 1.41L0.05 22.76 5.87 22.76 7.46 15.63 10.94 15.63 12.54 22.76 18.35 22.76 13.74 1.41 4.66 1.41zM8.79 10.09L9.74 5.66 10.68 10.09 8.79 10.09z"></path>
          </g>
        </svg>
      </div>
      
      <div className="flex items-center gap-4">
        <LanguageSelector />
        <a 
          href="/in/login" 
          className="netflix-button px-4 py-1 text-sm md:text-base"
          aria-label="Sign in to Netflix"
        >
          Sign In
        </a>
      </div>
    </header>
  );
};

export default Header;