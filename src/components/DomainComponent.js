import React, { useState } from 'react';

const DomainsComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="relative w-full max-w-5xl my-10 group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

      <div
        className={`relative p-10 bg-[#0a0a0a] rounded-lg shadow-md cursor-pointer transition-all duration-500 overflow-hidden ${
          isExpanded ? 'h-auto' : 'h-[200px]' // Dynamically adjusting height based on expanded state
        } flex flex-col items-center justify-center`} // Ensuring content is centered
        onClick={toggleExpand}
      >
        <h1 className="text-7xl font-bold text-gray-300 text-center group-hover:text-white transition duration-200">
          Artificial Intelligence
        </h1>

        {isExpanded && (
          <ul className="text-gray-400 mt-4 space-y-2 text-center">
            {/* Centering the list items */}
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default DomainsComponent;
