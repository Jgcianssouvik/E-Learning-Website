import React from 'react';
import { FiStar } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import {add,remove} from "./CartSlice";
import { AiFillDelete } from "react-icons/ai"
function Course({ item }) {


  let navigate = useNavigate();
  let navigate2 = useNavigate();

  const clickHandler = () => {

    let path = `newPath`;
    navigate(path);
    alert('Item Added Successfully');
  }

  const buyHandler = () => {
    let path = `payment`;
    navigate2(path);
  }


  return (
    <div className='flex flex-col items-start space-y-[1px]'>
      <img src='https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        className='h-32 w-full '
      />
      <div className=''>
        <h2 className='font-bold text-md pt-1 text-white capitalize'>{item.title}</h2>
        <h2 className='text-green-500 text-xs'>{item.username}</h2>
        <div className='flex space-x-1 '>
          <h3 className='text-orange-800 font-bold text-sm'>{item.vote}</h3>
          <div className='flex items-center'>
            <FiStar className='w-4 text-orange-400' />
            <FiStar className='w-4 text-orange-400' />
            <FiStar className='w-4 text-orange-400' />
            <FiStar className='w-4 text-orange-400' />
            <FiStar className='w-4 text-orange-400' />

          </div>
          <h3 className='text-xs text-white'>{item.students}</h3>
        </div>
        <div className='flex space-x-4 items-center mb-3'>
          <h3 className='text-black font-bold text-white'>{item.price}</h3>
          <h3 className='text-gray-800 text-sm line-through text-white '>{item.oldPrice}</h3>
        </div>
        <div className='space-x-4'>

          <Link to="/dashboard/payment"><button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={buyHandler}>Buy Now</button></Link>

          <Link to="/dashboard/newpath">







            <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={clickHandler}>Add To Cart</button>




          </Link>
        </div>

      </div>
    </div>
  );
}

export default Course;

