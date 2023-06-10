import React from "react";
import { useState, useEffect } from "react";
import backgroundImage from "./backgroundImage.png"; // import your image file
import backgroundImageOne from "./backgroundImageOne.gif";
import ImageSlider from "./ImageSlider";
import SolarSystem from "./SolorSystem";
import Video from "./YouTubePlayer";
import YouTubePlayer from "./YouTubePlayer";

const Home = () => {


  // const [color, setColor] = useState('text-red');

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setColor((prevColor) => (prevColor === 'text-blue-500' ? 'text-yellow-500' : 'text-blue-500'));
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  const handleImageClick = () => {
    window.location.href = 'mailto:pkssoniparveen@gmail.com?subject=Job Offer&body=Write Here';
  };

  return (
    
      <div
      className="bg-cover bg-center h-full opacity-80 w-full"
      style={{ backgroundImageOne: `url(${backgroundImageOne})`, backgroundSize: 'cover'  }}

    >
      <div className="  flex flex-col md:flex-row items-center justify-center md:justify-between max-w-6xl mx-auto mt-12" style={{"marginTop":"0%"}}>
        <div className="h-64 w-64 overflow-hidden  rounded-full " style={{"marginTop":"12%"}}>
          <img
            className="h-full w-full object-cover "
            src="ProfilePhoto.jpg"
            alt="My Photo"
          />
        </div>

        <div className="max-w-2xl md:ml-8">
          <h1 className="text-4xl font-sans hover:text-gray-400 font-bold mb-4" style={{"marginTop":"25%"}}>
            Software Engineer
          </h1>
          <p className="text-lg font-serif text-gray-1200">
            "Hi, I'm Parveen Kumar, a web developer with 1+ years of experience
            in building web applications. I'm passionate about developing robust
            and scalable solutions that solve real-world problems. My technical
            expertise includes proficiency in programming languages such as
            JavaScript and frameworks such as Node.js, React. I follow Agile
            development methodologies to ensure that projects are completed
            efficiently and to the highest standards. I've worked with clients
            across various industries, including finance, healthcare, and
            e-commerce. Feel free to get in touch with me at
            pkssoniparveen@gmail.com or via my 
            <a
              href="https://www.linkedin.com/in/parveenkumarsoni/"
              target="_blank" style={{color:"blue"}}
            >
              <strong> LinkedIn profile</strong>
            </a>
          </p>
        </div>
      </div>
      {/* <ImageSlider
        images={[
          "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGMlMjBzZXR1cHxlbnwwfHwwfHw%3D&w=1000&q=80",
          "https://cdn.autonomous.ai/static/upload/images/common/upload/20200930/6f2cce37d2c.jpg",
          "https://i.ytimg.com/vi/vhq9VhN4x8Y/maxresdefault.jpg",
          "https://i.ytimg.com/vi/vhq9VhN4x8Y/maxresdefault.jpg","https://i.ytimg.com/vi/vhq9VhN4x8Y/maxresdefault.jpg","https://i.ytimg.com/vi/vhq9VhN4x8Y/maxresdefault.jpg"
        ]}
      /> */}
        <div className={`absolute bottom-0 left-0 grid grid-cols-2 p-4 transition-colors duration-500`}>
        <div className="h-48 w-48 overflow-hidden  rounded-full " style={{"marginTop":"12%"}}>
          <img
            className="h-48 w-48 object-cover  hover:animate-spin"
            src="https://th.bing.com/th/id/R.6e22d939005ca2d81e938b5d06a38c8b?rik=UrvP7NoxTENI8Q&riu=http%3a%2f%2fblogimg.ngfiles.com%2f926000%2f926934%2f986966320_hire_me.png&ehk=0Wd%2fZ%2bHAsZypYn%2bCEmThd7MxGg4eb2BlSZ5CAM22feE%3d&risl=&pid=ImgRaw&r=0"
            alt="My Photo"
            onClick={handleImageClick}
            // alt="Rotating Image"
            
          />
        </div>




      </div>
      {/* <SolarSystem/> */}
      <div className="flex items-end justify-end">
        {/* <YouTubePlayer/> */}
        </div>
        {/* <SolarSystem/> */}
      </div>
   
  );
};



export default Home;
