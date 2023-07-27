import React from 'react';
import Course from "./Course"
import data from '../data.json';

function Courses() {
  return (
    <div className='flex flex-col items-start mx-8 space-y-3 mt-14 mb-8 '>
      <h2 className='text-4xl font-bold text-white capitalize'>A broad selection of courses</h2>
      <h3 className='text-xl text-white'>Choose from over 210,000 online video courses with new additions published every month.</h3>

      <div className='text-xs lg:text-xl flex space-x-4 ml-1 font-bold text-gray-500 cursor-pointer '>


        <h3>Python</h3>
        <h3>Excel</h3>
        <h3>Web Development</h3>
        <h3 className='text-bold '>JavaScript</h3>
        <h3>Data Science</h3>
        <h3>Aws Certification</h3>
        <h3>Drawing</h3>

      </div>
      <div className='text-left w-full border border-gray-300 p-7 '>
        <h2 className='text-2xl font-bold mb-2 text-white capitalize'>Expand your career opportunities with Coding</h2>
        <h3 className='text-white'>Take one of Udemy’s range of courses and learn how to code using this incredibly useful language. You’ll learn how to build everything from games to sites to apps.</h3>
        <button className='border border-blue-500 font-bold text-sm p-2 mt-4 mb-8 text-white'>Explore Coding</button>

        <div className='flex gap-4 flex-wrap md:flex-nowrap '>
          {data.map((item) => (
            <div className='h-70 w-70 ' key={item.id}>
              <Course item={item} />
            </div>
          ))}



        </div>




      </div>

    </div>
  );
}

export default Courses;
