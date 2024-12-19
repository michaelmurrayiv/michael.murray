import React from "react";
import TypewriterEffect from "@/components/TypewriterEffect";

const Profile = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <br />
        <TypewriterEffect text="Hi, I'm Michael" speed={100} />
        <p className="text-lg mt-2">
          I am a software engineer from Seattle.
          I'm passionate about all things computer science, from software
          engineering to deep learning to cybersecurity.
          I enjoy learning new technologies and working on fun projects.
        </p>
      </div>
      <div className="flex items-center justify-center w-1/2">
        <img
          src="/portrait.png"
          alt="Michael Murray"
          className="h-60 w-60 rounded-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default Profile;
