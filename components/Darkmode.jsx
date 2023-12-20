import React,{ useEffect,useState }  from 'react'
import darkpng from "../assets/website/dark-mode-button.png";
import lightpng from "../assets/website/light-mode-button.png";
const Darkmode = () => {
        useEffect(() => {
          const currentTheme = localStorage.getItem('theme') || 'light';
          document.documentElement.classList.toggle('dark', currentTheme === 'dark');
        }, []);
        const toggleDarkMode = () => {
          const currentTheme = localStorage.getItem('theme') || 'light';
          const isDarkMode = currentTheme === 'dark';
      
          // Toggle the theme
          const newTheme = isDarkMode ? 'light' : 'dark';
          localStorage.setItem('theme', newTheme);
      
          // Apply or remove the 'dark' class based on the new theme
          document.documentElement.classList.toggle('dark', !isDarkMode);
        };
  return (
    <div >
     <button
          onClick={toggleDarkMode} className="w-14"
    >

          {/* <img
            src={localStorage.getItem('theme') === 'dark' ? {darkpng} : {lightpng} }
            alt="abc"
          /> */}
          <img src={darkpng} id="myelement"  className={`w-12 absolute  z-10 ${localStorage.getItem('theme') ==="dark" ? "opacity-0":"opacity:100"}`} alt="" />
          <img src={lightpng} className="w-12  z-10" alt="" />
        </button>
    </div>
  )
  }

export default Darkmode