import React from "react";
import { useState } from "react";

const Card = ({ imageSrc, title, description }) => {
const [projects,setProjects]=useState();





  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-12" style={{marginTop:0}}  >
    <div className="relative" style={{marginTop:120}} >
      <div className=" w-full h-60 rounded-lg overflow-hidden" >
       <img src="https://www.susla.edu/assets/susla/images/WebDevelopmentImage.jpeg" alt="sadjh ck" className="w-full h-full object-cover opacity-100  "  />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 to-transparent p-4">
        <h3 className="text-lg font-medium text-white  " style={{marginTop:140}}><strong>Automation Framework</strong></h3>
        <p className="text-sm text-gray-200 	">Framework for Embedded Boards & Testing   <a href="https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html" className=" hover:text-blue-300 text-white font-bold py-2  rounded-l-md rounded-r-md" target="_blank" style={{marginLeft:110,fontSize:16}}><strong>Check-out</strong></a>   </p>
      </div>
      </div>

      <div className="relative" style={{marginTop:120}} >
      <div className=" w-full h-60 rounded-lg overflow-hidden" >
       <img src="https://openest.io/wp-content/uploads/2019/12/beaglegone-1024x768.jpeg" alt="sadjh ck" className="w-full h-full object-cover opacity-100  "  />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 to-transparent p-4">
        <h3 className="text-lg font-medium text-white  " style={{marginTop:140}}><strong>Yocto Project</strong></h3>
        <p className="text-sm text-gray-200 	">Custom linux for Embedded Boards</p>
        <a href="https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html" className=" hover:text-blue-300 text-white font-bold py-2  rounded-l-md rounded-r-md" target="_blank"><strong>Check-out</strong></a>
      </div>
      </div>
{/* ----------------------------------------------------------------------------------- */}
      <div className="relative" style={{marginTop:120}}  >
      <div className=" w-full h-60 rounded-lg overflow-hidden" >
       <img src="https://i.ytimg.com/vi/ZGg6czdmRXg/maxresdefault.jpg" alt="sadjh ck" className="w-full h-full object-cover opacity-100  "  />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 to-transparent p-4">
        <h3 className="text-lg font-medium text-white  " style={{marginTop:160}}><strong>5G Automation</strong></h3>
        <p className="text-sm text-gray-200 	">Made Framework UI for 5G board</p>
      </div>
      </div>
{/* ---------------------------------------------------------------------- */}
      <div className="relative" style={{marginTop:120}} >
      <div className=" w-full h-60 rounded-lg overflow-hidden" >
       <img src="https://cdn.siasat.com/wp-content/uploads/2022/11/avqebe.jpg" alt="sadjh ck" className="w-full h-full object-cover opacity-100  "  />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 to-transparent p-4">
        <h3 className="text-lg font-medium text-white  " style={{marginTop:140}}><strong>C++ Code Development</strong></h3>
        <p className="text-sm text-gray-200 	">Sales Management System</p>
        <a href="https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html" className=" hover:text-blue-300 text-white font-bold py-2  rounded-l-md rounded-r-md" target="_blank"><strong>Github</strong></a>
      </div>
      </div>
{/* ---------------------------------------------------------------------------------- */}
      <div className="relative" >
      <div className=" w-full h-60 rounded-lg overflow-hidden" >
       <img src="https://hackster.imgix.net/uploads/attachments/815836/rpisixfab-connected2_J8QmrNQpJ3.png?auto=compress%2Cformat&w=900&h=675&fit=min" alt="sadjh ck" className="w-full h-full object-cover opacity-100  "  />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 to-transparent p-4">
        <h3 className="text-lg font-medium text-white  " style={{marginTop:140}}><strong>RDK-B</strong></h3>
        <p className="text-sm text-gray-200 	">RDK-B image through RPi</p>
        <a href="RDK-B Project.docx" className=" hover:text-blue-300  text-white font-bold py-2  rounded-l-md rounded-r-md"><strong>Download</strong></a>


      </div>
      </div>
      
      
{/* ------------------------------------------------------------------------------ */}
      <div className="relative" >
      <div className=" w-full h-60 rounded-lg overflow-hidden" >
       <img src="https://www.susla.edu/assets/susla/images/WebDevelopmentImage.jpeg" alt="sadjh ck" className="w-full h-full object-cover opacity-100  "  />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 to-transparent p-4">
        <h3 className="text-lg font-medium text-white  " style={{marginTop:160}}><strong>askjdbvhlajsbhvd</strong></h3>
        <p className="text-sm text-gray-200 	">oaisdfoniandsc</p>
      </div>
      </div>
{/* --------------------------------------------------------------------------- */}
      <div className="relative" >
      <div className=" w-full h-60 rounded-lg overflow-hidden" >
       <img src="https://www.susla.edu/assets/susla/images/WebDevelopmentImage.jpeg" alt="sadjh ck" className="w-full h-full object-cover opacity-100  "  />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 to-transparent p-4">
        <h3 className="text-lg font-medium text-white   " style={{marginTop:160}}><strong>askjdbvhlajsbhvd</strong></h3>
        <p className="text-sm text-gray-200 	">oaisdfoniandsc</p>
      </div>
      </div>
{/* ---------------------------------------------------------------------------- */}
      <div className="relative" >
      <div className=" w-full h-60 rounded-lg overflow-hidden" >
       <img src="https://www.susla.edu/assets/susla/images/WebDevelopmentImage.jpeg" alt="sadjh ck" className="w-full h-full object-cover opacity-100  "  />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 to-transparent p-4">
        <h3 className="text-lg font-medium text-white  " style={{marginTop:160}}><strong>askjdbvhlajsbhvd</strong></h3>
        <p className="text-sm text-gray-200 	">oaisdfoniandsc</p>
      </div>
      </div>

    </div>
  );
};

export default Card


