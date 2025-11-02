import React from 'react';

const LanguageSelector = () => {
  return (
    <div className="relative">
      <label htmlFor="language-select" className="sr-only">
        Select Language
      </label>
      <div className="relative">
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" 
              fill="currentColor"
            />
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M10.4697 3.96967C10.7626 3.67678 11.2374 3.67678 11.5303 3.96967C11.8232 4.26256 11.8232 4.73744 11.5303 5.03033L8.53033 8.03033C8.23744 8.32322 7.76256 8.32322 7.46967 8.03033L4.46967 5.03033C4.17678 4.73744 4.17678 4.26256 4.46967 3.96967C4.76256 3.67678 5.23744 3.67678 5.53033 3.96967L8 6.43934L10.4697 3.96967Z" 
              fill="currentColor"
            />
          </svg>
        </div>
        <select 
          id="language-select" 
          className="appearance-none bg-transparent border border-white/30 text-white py-1 pl-8 pr-6 rounded-sm text-sm focus:outline-none focus:border-white"
        >
          <option value="en-IN">English</option>
          <option value="hi-IN">हिन्दी</option>
        </select>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967C12.2374 5.17678 11.7626 5.17678 11.4697 5.46967L8 8.93934L4.53033 5.46967C4.23744 5.17678 3.76256 5.17678 3.46967 5.46967C3.17678 5.76256 3.17678 6.23744 3.46967 6.53033L7.46967 10.5303C7.76256 10.8232 8.23744 10.8232 8.53033 10.5303L12.5303 6.53033Z" 
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;