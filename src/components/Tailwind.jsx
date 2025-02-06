import React from 'react';

function Tailwind() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Colored placeholder (33%) */}
          <div className="w-full md:w-1/3 bg-blue-500 h-48 md:h-auto"></div>
          
          {/* Text content (66%) */}
          <div className="w-full md:w-2/3 p-6">
            <h2 className="text-xl font-bold mb-4">Card Title</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
              Click Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tailwind; 