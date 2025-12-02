import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>venugopal | Resume</title>
        <meta
          name='description'
          content='I’m a fullstack developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Koyyana Venugopal</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/koyyana-venugopal-62665a30a'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/venu95020'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
             Full stack Developer
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Full stack Developer</p>  
          </div>
        </div>
        <p>
          Full Stack Java Developer skilled in Java, Spring Boot, React, and SQL, experienced in building RESTful APIs, 
microservices, and responsive web applications with expertise in Spring Data JPA, Hibernate, and front-end 
technologies like React.js and Bootstrap. Proficient in Git, Docker, and AWS for deployment and version 
control.  
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>FullStack Developer
            <span className='px-2'>|</span> core java
            <span className='px-2'>|</span>Advance java
            <span className='px-2'>|</span>Spring
            <span className='px-2'>|</span>Springboot
            <span className='px-2'>|</span>Sql
            <span className='px-2'>|</span>Pl/SQL
            <span className='px-2'>|</span>Html
            <span className='px-2'>|</span>TailwindCSS
            <span className='px-2'>|</span>Bootstrap
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Internships
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
           Rugvedha Technologies
            </span>
            <span className='px-2'>|</span>Bangluru
          </p>
          <p className='py-1 italic'>Full stack developer, (Feb 2024 - May 2024)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            
            <li>
            Completed a long-term internship focused on Full Stack Java Development using Spring 
             Boot, React.js, and MySQL.  
            </li>
            <li>
           Gained hands-on experience in building RESTful APIs, frontend integration, and database 
            management.  
            </li>
            <li>
            Enhanced understanding of MVC architecture, exception handling, and API testing. 
            </li>
            
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Janatha Media Services Pvt. Ltd.
            </span>
            <span className='px-2'>|</span>Hyderabad
          </p>
          <p className='py-1 italic'>Public Relations & Digital Opearationsr, (Aug 2023 - Sept 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Completed a short-term internship assisting in public relations, corporate communications, 
              and digital promotions.  
            </li>
            <li>
            Supported website operations and content updates to improve online presence.  
            </li>
           
          </ul>
        </div>      
        </div>   
    </>
  );
};

export default resume;
