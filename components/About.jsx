import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
           Hello! I’m Venu Gopal, a Java Full Stack Developer passionate about building scalable web applications and solving real-world problems through clean, efficient code.
            I completed my B.Sc. graduation in 2024 from Dr. B.R. Ambedkar University. After graduation, I focused on mastering full-stack development using Java, Spring Boot, React, 
            SQL, and modern web technologies
          </p>
          <p className='py-2 text-gray-600'>
           Over time, I have built several hands-on projects, including REST APIs, full-stack applications, and core Java systems, which strengthened
            my understanding of backend architecture, frontend UI design, 
           and database management. I enjoy turning ideas into functional products, writing reusable code, and continuously learning new technologies.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-blue-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/koyyana-venugopal-62665a30a'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/venu95020'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        
      
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src="/assets/passphoto.jpg" width={400}
            height={600} className='rounded-xl ' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
