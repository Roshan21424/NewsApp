import React, { useState ,useEffect} from 'react';

const DomainsComponent = ({name,subdomains,description}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hovered, setHovered] = useState(false); // Track hover state
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };
   // Set timeout to collapse the component after 10 seconds if not hovered
   useEffect(() => {
    let timer;
    if (!hovered && isExpanded) {
      timer = setTimeout(() => {
        setIsExpanded(false); // Collapse after 10 seconds
      }, 3000); // 10 seconds timeout
    }

    return () => {
      if (timer) {
        clearTimeout(timer); // Cleanup timeout if component is hovered again
      }
    };
  }, [hovered, isExpanded]);


  return (
   
    <div className="relative w-full max-w-4xl my-5 group" onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

      <div
        className={`relative p-5 bg-[#0a0a0a] rounded-lg shadow-md cursor-pointer transition-all duration-500 overflow-hidden ${
          isExpanded ? 'h-auto' : 'h-[100px]' // Dynamically adjusting height based on expanded state
        } flex flex-col items-center justify-center`} // Ensuring content is centered
        onClick={toggleExpand}
      >
        <h1 className="text-5xl font-bold text-gray-300 text-center group-hover:text-white transition duration-200">
         {name}
        </h1>

        {isExpanded && (
          <div>
          <p className="text-white text-justify m-5">{description}</p>
          <ul className="text-gray-400 mt-4 ml-8 space-y-2  text-2xl">
            {subdomains.map((subdomain,index)=>(
            <li className='hover:text-green-300' key={index}>{subdomain}</li>
            ))}
          </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DomainsComponent;
