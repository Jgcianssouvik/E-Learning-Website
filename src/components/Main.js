import React from 'react';

function Main() {
  return (
    <div>
      <div className='w-full h-96 border border-gray-200 relative '>
        <img src='https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          className='w-full h-full object-cover bg-no-repeat bg-bottom'></img>
        <div className='absolute bg-white top-12 left-8 p-4 flex flex-col items-start justify-center shadow-lg h-40 w-[440px] '>
          <h2 className='text-3xl font-bold mb-2 '>Hi, guys Welcome</h2>
          <h3 className='text-xl'>Look at this Project !!!Let's go</h3>
          <h3 className='text-xl'>The goal is learn Without stress</h3>
        </div>



      </div>
    </div>
  );
}

export default Main;
