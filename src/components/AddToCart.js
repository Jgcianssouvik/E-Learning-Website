import React from 'react';
import { Link } from 'react-router-dom';

function AddToCart({ setIsLoggedIn }) {
    return (
        <div>


            <div className="flex flex-row justify-center items-center text-white text-3xl h-screen ">

                <div>
                    <div className="min-h-[80vh] flex flex-col items-center justify-center">
                        <h1 className="text-gray-700 font-semibold text-2xl mb-2">Your Cart is Empty !!</h1>
                        <Link to="/dashboard">
                            <button className="bg-green-700  hover:bg-purple-50 rounded-lg 
                      text-white transition duration-300 ease-linear mt-5  border-2  border-green-600  font-bold  hover:text-green-700  p-3  text-xl
                      uppercase">Shop Now</button>
                        </Link>
                        <Link to="/dashboard">
                            <img className='w-[90%] h-[370px] mr-5 ml-5 mt-5' src='https://isaksham.co.in/Maintanencepage/maintain.PNG' />
                        </Link>
                    </div>






                </div>





            </div>
        </div>
    );
}

export default AddToCart;
