// ImageTextComponent.jsx
import React from 'react';

const Author = () => {
    return (
        <div className='p-10 bg-[#0a0a0a]'>
            <div className="flex justify-center">
  <p className="text-5xl text-white font-semibold p-6 w-max mx-auto my-8 text-center">
    From the Author
  </p>
</div>


            <div className="flex items-center justify-evenly ">

                {/* Image Section */}
                <div className="flex-shrink-0 w-1/3">
                    <img
                        src="https://via.placeholder.com/300" // Replace with your image URL
                        alt="Placeholder"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>

                {/* Content Section */}
                <div className="w-1/3">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Your Content Title</h2>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet cursus odio.
                        Integer nec venenatis felis. Quisque pretium sapien purus, sit amet facilisis turpis
                        viverra a.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Author;
