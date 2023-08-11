import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
// import Help from "./components/Help";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [icon, setIcon] = useState(false);
  const navigator = useNavigate();
  function navigateToHome() { navigator("/"); }
  function clickHandler() { setIcon(!icon); }

  return (
    <div className="h-screen flex flex-col justify-between overflow-x-hidden">
      <nav className='h-12 md:h-14 bg-black flex justify-between items-center relative' >
        <div className="p-1 pl-2 h-full flex items-center gap-4 hover:cursor-pointer" onClick={navigateToHome}>
          <img className="h-full" src="logo-removebg.png" alt="logo-img" />
          <h1 className="text-3xl pl-2 font-bold">YT Tool</h1>
        </div>

        <div className="hidden md:flex flex-row justify-between items-center m-2">
          <NavLink className={({ isActive }) => (isActive ? 'border rounded-md p-1 font-semibold' : '')} to="/"><div className="px-2 mx-3 text-white hover:font-semibold">Home</div></NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'border rounded-md p-1 font-semibold' : '')} to="/about"><div className="px-2 mx-3 text-white hover:font-semibold">About</div></NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'border rounded-md p-1 font-semibold' : '')} to="/contact"><div className="px-2 mx-3 text-white hover:font-semibold">Contact</div></NavLink>
          {/* <NavLink className={({ isActive }) => (isActive ? 'border rounded-md p-1 font-semibold' : '')} to="/help"><div className="px-2 mx-3 text-white hover:font-semibold">How to Use</div></NavLink> */}
        </div>

        <div className={`flex md:hidden ${(!icon) ? 'hidden' : 'flex'} flex-col items-start pt-12 absolute right-0 top-0 p-2 bg-black z-10 rounded-md w-1/3`}>
          <NavLink className={({ isActive }) => (isActive ? 'hidden' : 'block text-white')} to="/" onClick={clickHandler}><div>Home</div></NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'hidden' : 'block text-white')} to="/about" onClick={clickHandler}><div>About</div></NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'hidden' : 'block text-white')} to="/contact" onClick={clickHandler}><div>Contact</div></NavLink>
          {/* <NavLink className={({ isActive }) => (isActive ? 'hidden' : 'block text-white')} to="/help" onClick={clickHandler}><div>How to Use</div></NavLink> */}
        </div>

        <div className={`h-full z-20 ${(!icon) ? 'block' : 'hidden'} md:hidden hover:cursor-pointer`} onClick={clickHandler}>
          <img className="h-full p-2" src="hamburger-icon.jpg" alt="hamburger-icon" />
        </div>
        <div className={`h-full z-20 ${(icon) ? 'block' : 'hidden'} md:hidden hover:cursor-pointer`} onClick={clickHandler}>
          <img className="h-full p-2" src="cross-icon.jpg" alt="hamburger-icon" />
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/help" element={<Help />} /> */}
      </Routes>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

/* 
   
*/

