import React from "react";
import { useState } from "react";

const Card = ({ imageSrc, title, description }) => {
const [projects,setProjects]=useState();





  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full w-1/2 max-w-7xl mx-auto mt-12" style={{marginTop:0}}  >
    <a className="relative" style={{marginTop:120}} href="https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html" target="blank">
      <div className=" w-full h-60 rounded-lg overflow-hidden" >
       <img src="https://www.susla.edu/assets/susla/images/WebDevelopmentImage.jpeg" alt="sadjh ck" className="w-full h-full object-cover opacity-100  "  />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 to-transparent p-4">
        <h3 className="text-base font-medium text-white  " style={{marginTop:150}}><strong>Automation Framework</strong></h3>
        <p className="text-sm text-gray-200 	">Framework for Embedded Boards & Testing      </p>
      </div>
      </a>

      <a className="relative" style={{marginTop:120}} href="https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html" target="blank">
      <div className=" w-full h-60 rounded-lg overflow-hidden" >
       <img src="https://openest.io/wp-content/uploads/2019/12/beaglegone-1024x768.jpeg" alt="sadjh ck" className="w-full h-full object-cover opacity-100  "  />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 to-transparent p-4">
        <h3 className="text-base font-medium text-white  " style={{marginTop:160}}><strong>Yocto Project</strong></h3>
        <p className="text-sm text-gray-200 	">Custom linux for Embedded Boards</p>
        
      </div>
      </a>
{/* ----------------------------------------------------------------------------------- */}
      <div className="relative" style={{marginTop:120}}  >
      <div className=" w-full h-60 rounded-lg overflow-hidden" >
       <img src="https://i.ytimg.com/vi/ZGg6czdmRXg/maxresdefault.jpg" alt="sadjh ck" className="w-full h-full object-cover opacity-100  "  />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 to-transparent p-4">
        <h3 className="text-base font-medium text-white  " style={{marginTop:160}}><strong>5G Automation</strong></h3>
        <p className="text-sm text-gray-200 	">Made Framework UI for 5G board</p>
      </div>
      </div>
{/* ---------------------------------------------------------------------- */}
      <a className="relative" style={{marginTop:120}} href="" target="blank">
      <div className=" w-full h-60 rounded-lg overflow-hidden" >
       <img src="https://cdn.siasat.com/wp-content/uploads/2022/11/avqebe.jpg" alt="sadjh ck" className="w-full h-full object-cover opacity-100  "  />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 to-transparent p-4">
        <h3 className="text-base font-medium text-white  " style={{marginTop:180}}><strong>C++ Code Development</strong></h3>
        <p className="text-sm text-gray-200 	">Sales Management System</p>
        </div>
      </a>
{/* ----------------------------------------href="https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html" target="blank"------------------------------------------ */}
      <a className="relative " style={{marginTop:120}} href="RDK-B Project.docx" target="blank" >
      <div className=" w-full h-64 rounded overflow-hidden" >
       <img src="https://hackster.imgix.net/uploads/attachments/815836/rpisixfab-connected2_J8QmrNQpJ3.png?auto=compress%2Cformat&w=900&h=675&fit=min" alt="sadjh ck" className="w-full h-full object-cover opacity-100  "  />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 to-transparent p-4">
        <h3 className="text-base font-medium text-white  " style={{marginTop:180}}><strong>RDK-B</strong></h3>
        <p className="text-sm text-gray-200 	">RDK-B image through RPi</p>
      </div>
      </a>
      {/* -------------------------------------------------------------------------------------------------------------------------- */}
      
      <a className="relative " style={{marginTop:120}} href="https://youtu.be/h_tWJMyYgD8" target="blank" >
      <div className=" w-full h-64 rounded overflow-hidden" >
       <img src="https://images.mktw.net/im-651595?width=1280&size=1.33333333" alt="sadjh ck" className="w-full h-full object-cover opacity-100  "  />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 to-transparent p-4">
        <h3 className="text-base font-medium text-white  " style={{marginTop:165}}><strong>Texas Instruments </strong></h3>
        <p className="text-sm text-gray-200 	">Made Product based Project with Texas Instruments</p>
      </div>
      </a>


       </div>
  );
};

export default Card


