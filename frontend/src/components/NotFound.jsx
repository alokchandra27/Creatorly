import React from 'react';
import { Hand } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

const navigate = useNavigate();
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-['Poppins',_sans-serif] px-4">
      <div className="max-w-md w-full flex flex-col items-center">
        
        {/* GIF Section */}
        <div className="w-full flex justify-center">
          <img 
            src="https://i.postimg.cc/2yrFyxKv/giphy.gif" 
            alt="Page not found gif" 
            className="max-w-full h-auto"
          />
        </div>

        {/* Content Section */}
        <div className="text-center mt-12 mb-4">
          <h1 className="text-[2.5rem] font-bold text-gray-900 font-caveat leading-tight">
            This page is gone.
          </h1>
          <p className="text-[1.3rem] text-gray-600 py-3">
            ...maybe the page you're looking for is not found or never existed.
          </p>
          
          {/* Back to Home Button */}
          <div 
            onClick={() => navigate('/')}
            rel="noopener noreferrer"
            className="inline-block mt-4 cursor-pointer"
          >
            <button className="flex font-caveat items-center gap-2 px-4 py-3 rounded-[15px] bg-creator-accent    text-white text-[1.3rem] hover:bg-[#0036a8] transition-colors cursor-pointer border-none outline-none">
              Back to Jhankoo 
              <Hand className="w-6 h-6 rotate-90" /> {/* Hand icon slightly rotated to look like pointing right */}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NotFound;