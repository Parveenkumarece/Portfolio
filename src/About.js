import React from 'react'
import SocialLinks from './SocialLinks';
import backgroundImage from './backgroundImage.png';
import {
  Link
} from 'react-router-dom';

const About = () => {
    return (
      <div
      className="h-screen bg-cover bg-center h-full opacity-80 w-full"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'  }}

    >
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center" style={{marginTop:50,marginBottom:20}}>
          <h2 className="text-3xl font-extrabold text-gray-900">Here is my Work Experience in different sectors</h2>
         
        </div>
  {/* --------------------------------------------------------------- */}
        <div className="flex flex-row py-5 border-2" >
      <div className="w-1/2 mx-2">
        <img src="https://images.mktw.net/im-651595?width=1280&size=1.33333333" alt="Photo" className="h-full w-full" />
      </div>
      <div className="w-1/2 p-4">
        <h1 className="text-2xl "> <strong>Texas Instruments</strong>    &#160;( Internship Nov 2020 - Jan 2022)</h1>
        <p className="mt-4">
          When I was in my 3rd year I have joined one hackathon which turned in an internship. This was all about of a startup idea. Here I have idea and Texas Instruments helps me to implement that. 
        </p>
        
        <p className="mt-4">
          <strong>Idea :</strong> The idea was to build a smart pill box which can monitor and dispense the dosages according to patient requirement. It also provide one mobile application to monitor the dosages related activities and Patient pill consumption that if he/she taking the pill on daily basis or not ?
        </p>
        <p className="mt-4">
          <strong>Requirement:</strong> As we know that in India around 40% people are suffereing from chronical diseases like Cancer, Heart related diseases etc. in which skipping dosages can affect their health. Also some people which lives far from hospital have to go to hospital to upgrade their dosages. There are many cases in which the patient claims that he/she has taken the pills but they are not getting good results. So this device can solve all such problems.
        </p>
        <p className="mt-4">
          <strong>Solution:</strong> In that Pill box all type dosages can be added and same will reflect in patient mobile application. The interface is so simple that any age group can use that app effectively. The pill box will send first notification and then make a call to the user mobile when it's time to take pill. When the patient take out pill it will reflect in the app that the user has taken the pill and same will update in the database of pill storage.
          Also when patient complains about treatment that pill doesn't work for him/her then in that case the doctor has also a clear idea that when the patient has taken the pill or not in his/her application only.
        </p>  
        <p className="mt-4">
          <strong>Technology:</strong>  In that project components used are: 
          <p className=" mt-2">
          Components: MSP430FF29, CC3100 Boost, HX711 Amplifier, Load Cell, Infrared sensor.
        </p>
        <p className=" mt-1">
         Working: Here first loadcell will calibrate the weigh and send the measured value to HX711 amplifier which will amplify the signal and convert the signal in digital form and send to MSP430FF29 controller which sends that data to server using CC3100 Boost 'Wifi- module'. From there it will update the data in the database and will reflect the data in the mobile application.
        </p>
        </p>
      </div>
    </div>
    {/* ----------------------------------------------------------------- */}

    <div className="flex flex-row py-5 border-2" >
      <div className="w-1/2 mx-2">
        <div className="h-1/2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/.xyz_logo.svg/800px-.xyz_logo.svg.png" alt="Photo" className="h-auto w-full" />
        </div>
      </div>
      <div className="w-1/2 p-4">
        <h1 className="text-2xl "> <strong>XYZ Pvt. Ltd.</strong>    &#160;( Software Engineer)</h1>
        <p className="mt-4">
          I joined XYZ company in june 2022 as an Associate Software Engineer. I was recruited for the position of Junior Web Developer.
        </p>
        
        <p className="mt-4">
          <strong>Skills :</strong> Before coming here I was just knowing my college skills and as I am from Electronics background I don't know much about Web Development. But over these months I upgrade my myself and learned React, JavaScript, C++ and much more.
        </p>
        <p className="mt-4">
          <strong>Projects:</strong> I have done many Projects here. In starting I have worked in building custom Linux for the boards using Yocto Project. I have also worked in Renesas Board and configure many properties of that. After 4 months I started working in Development Projects. I developed an Automation Framework that you can checkout in Projects Page. 
          <Link to="/projects" className="text-blue-600 hover:bg-blue-300 px-3 py-2 rounded-md text-sm font-medium"><strong>Checkout</strong></Link>
          After that I worked with 5G team and developed a framework for testing boards.

        </p>
        <p className="mt-4">
          <strong>Skill Set:</strong> I have upskill my self and at this position I am good in :
          <p className="mt-1">
           <ol>
            <li>C++</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>Tailwind CSS</li>
            <li>Embedded C</li>
            <li>Linux</li>
           </ol>
          </p>
        </p>  
        
      </div>
    </div>


    {/* ------------------------------------------------------------------ */}

          <div className="mt-10 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a href="Parveen Resume.pdf" download className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l-md rounded-r-md">
                Download Resume
              </a>
            </div>
          </div>
      </div>
      </div>
    );
  };
  
  export default About;
  
      
  



