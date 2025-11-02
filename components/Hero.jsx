import React from 'react';
import EmailForm from './EmailForm';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9c363af5-4750-4f14-87d1-8125f5276db0/web/IN-en-20251027-TRIFECTA-perspective_b68b1528-3a10-4997-9f99-48ccbdb86626_large.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-32 pb-24 text-center z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Unlimited movies, shows, and more
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Starts at ₹149. Cancel at any time.
          </p>
          
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;