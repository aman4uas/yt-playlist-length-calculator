import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const date = new Date();
  const year = date.getFullYear();
  function clickHandler() { navigate("/contact"); }
  return (
    <div className="flex justify-center items-center h-8 md:h-10 bg-black text-xs sm:text-base">
      Made with ❤️ by<span className="text-[#6BC9E7] hover:cursor-pointer" onClick={clickHandler}>&nbsp;Aman Singh</span>.&nbsp;&copy; {year}
    </div>
  );
}

export default Footer;