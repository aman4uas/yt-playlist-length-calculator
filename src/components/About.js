import React from "react";

function About() {
  document.title = "About - YT Playlist Length Calculator";
  return (
    <div className="bg-black/50 h-full p-4 flex flex-col justify-center items-center text-center">
      <h1 className="font-bold text-4xl m-6">About YT Tool</h1>
      <p className="m-7 p-2 md:p-5 text-lg font-serif">
        Welcome to YT Tool, your go-to destination for accurately calculating the length of YouTube playlists! Whether you're a content creator planning the perfect video lineup or a viewer looking to manage your watch time effectively, YT Tool has got you covered. We understand that time is valuable, and with the explosion of content on YouTube, it can be challenging to estimate how much time you'll need to set aside for your favorite playlists. That's where YT Tool comes in. Our advanced algorithm takes the guesswork out of the equation, providing you with precise estimates of playlist durations.
      </p>
    </div>
  );
}

export default About;