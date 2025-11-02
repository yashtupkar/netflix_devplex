import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with email:', email);
  };

  return (
    <form 
      className="w-full max-w-3xl mx-auto mt-6"
      onSubmit={handleSubmit}
      aria-label="Sign up or restart your membership with Netflix."
    >
      <h3 className="text-lg md:text-xl text-center mb-4">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-grow">
          <label 
            htmlFor="email-input" 
            className={`absolute left-4 text-gray-400 transition-all duration-200 ${
              isFocused || email ? 'text-xs top-2' : 'top-1/2 -translate-y-1/2'
            }`}
          >
            Email address
          </label>
          <input
            id="email-input"
            type="email"
            className="netflix-input h-14 md:h-16 pt-6"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required
          />
        </div>
        <button 
          type="submit" 
          className="netflix-button text-xl h-14 md:h-16 px-4 md:px-8 whitespace-nowrap"
        >
          Get Started
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
          >
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M7.29297 19.2928L14.5859 12.0001L7.29297 4.70718C6.90237 4.31628 6.90237 3.68318 7.29297 3.29238C7.68357 2.90151 8.31704 2.90151 8.70764 3.29238L16.7076 11.2924C17.0982 11.6833 17.0982 12.3164 16.7076 12.7072L8.70764 20.7072C8.31704 21.0981 7.68357 21.0981 7.29297 20.7072C6.90237 20.3164 6.90237 19.6833 7.29297 19.2928Z" 
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default EmailForm;