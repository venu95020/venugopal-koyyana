import Link from 'next/link';
import React from 'react';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> venugopal </span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Software Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building applications on both the front-end and back-end
            while integrating other technologies.
        </p>
            
        </div>
      </div>
    </div>
  );
};

export default Main;
