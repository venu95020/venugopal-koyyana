import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Education = () => {
  return (
    <div id='education' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            EDUCATION
          </p>
          <h2 className='py-4'>What i studied</h2>
          <p className='py-3 text-black-2000'>🎓GRADUATION</p>
          <p className='px-5  text-gray-700'>
            DR.B.R Ambedhkar University<br/>
            Bachelor of computer science -2024
          </p>
          <p className='py-3 text-black-2000'>🎓HIGHER SECONDARY EDUCATION</p>
          <p className='px-5 text-gray-700'>
            Sri Chaitanya Educational Institutes<br/>
            M.P.C -2021
          </p>
          <p className='py-3 text-black-2000'>🎓SECONDARY EDUCATION</p>
          <p className='px-5 text-gray-700'>
            M.P.L High School<br/>
            S.S.C -2019
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src="/assets/skills/education.jpg" 
          width ={500} height={300} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default Education;
