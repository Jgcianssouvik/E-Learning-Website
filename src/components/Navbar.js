import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaGlobeAsia } from 'react-icons/fa';
import { FcSearch } from 'react-icons/fc';
import { FaShoppingCart } from 'react-icons/fa'


import { useSelector } from 'react';



function Navbar(props) {


    //const {cart}=useSelector((state)=>state)

    const cart = 0;


    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    return (
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">

            <Link to='/'>

                <img src="https://assets.website-files.com/62b3125df8c8a46ebb3fe082/62b31ba5226e316dfe84141f_Group%201%20(5).png" alt="logo" width={160} height={32} loading="lazy" />
            </Link>

            <nav>
                <ul className="flex gap-x-6 text-white">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/About'>About</Link>
                    </li>
                    <li>
                        <Link to='/contactUs'>Contact</Link>
                    </li>

                </ul>

            </nav>

            <div className="flex items-center gap-x-4">


                <div className='flex '>


                    <Link to="/dashboard/newpath"><div className='relative'><FaShoppingCart className='text-2xl text-white' />


                        {


                            <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart}</span>
                        }


                    </div></Link>



                </div>

                {!isLoggedIn && <Link to="/login"><button className="bg-black text-white py-[8px] px-[12px] rounded-[8px] border border-blue-700 ">Login</button></Link>}
                {!isLoggedIn && <Link to="/signUp"><button className="bg-black text-white py-[8px] px-[12px] rounded-[8px] border border-blue-700 " >Sign up</button></Link>}

                {isLoggedIn && <Link to="/"><button className="bg-black text-white py-[8px] px-[12px] rounded-[8px] border border-blue-700 " onClick={
                    () => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out")
                    }}>Logout</button></Link>}

                {isLoggedIn && <Link to="/dashboard"><button className="bg-black text-white py-[8px] px-[12px] rounded-[8px] border border-blue-700 " >Dashboard</button></Link>}

                <Link to="/demoVideos"><button className='border border-blue-400 rounded-full w-10 h-10 flex items-center justify-center text-yellow-400 bg-gray-500 hover:bg-[#F5F5F5]'>
                    <FaGlobeAsia className='h-5 w-5 ' /></button>
                </Link>




            </div>


        </div>
    )
}
export default Navbar;

/*
 cart.length >0 &&

*/