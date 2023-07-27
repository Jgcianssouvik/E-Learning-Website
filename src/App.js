import "./App.css";
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import { useState } from "react";
import AddToCart from "./components/AddToCart";
import Payment from "./components/Payment";
import PrivateRoute from './components/PrivateRoute'
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import DemoVideos from "./components/DemoVideos";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (

    <div className="w-full h-full bg-black flex flex-col">

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} className=" " />

      <Routes>

        <Route path='/' element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path='/demoVideos' element={<DemoVideos isLoggedIn={isLoggedIn} />} />
        <Route path='/contactUs' element={<ContactUs isLoggedIn={isLoggedIn} />} />
        <Route path='/About' element={<About isLoggedIn={isLoggedIn} />} />

        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/dashboard' element={<PrivateRoute isLoggedIn={isLoggedIn} ><Dashboard /></PrivateRoute>} />

        <Route path='/dashboard/newPath' element={<AddToCart setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/dashboard/payment' element={<Payment setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>

    </div>
  );
}

export default App;
