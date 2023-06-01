import React, { useState } from "react";
import YouTube from "react-youtube";
// import {
//   bg-gray-200,
//   border-gray-200,
//   flex,
//   h-full,
//   justify-content-center,
//   min-h-screen,
//   mx-auto,
//   p-4,
//   rounded-md,
//   shadow-md,
//   text-gray-800,
//   w-full,
// } from "tailwindcss/classes";

const YouTubePlayer = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-gray-200 border-gray-200  mx-auto p-4 rounded-md shadow-md">
      <YouTube
        id={videoId}
        controls={isPlaying ? false : true}
        onReady={() => setIsPlaying(true)}
      />
    </div>
  );
};

export default YouTubePlayer;