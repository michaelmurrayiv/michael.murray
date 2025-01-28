import React from "react";
import TypewriterEffect from "@/components/TypewriterEffect";

const Profile = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <br />
        <TypewriterEffect text="Hi, I'm Michael" speed={100} />
        <p className="text-lg mt-2">I am a software engineer from Seattle.</p>
        <p className="text-lg mt-2">
          I&apos;m passionate about all things computer science, and am
          particularly interested in software engineering, deep learning, and
          cybersecurity. I enjoy working on projects where I can learn new
          technologies and solve interesting problems. In my free time, I love
          to play basketball, mountain bike, and read.
        </p>
        <p className="text-lg mt-2">
          If you&apos;d like to get in touch, feel free to reach out on{" "}
          <a
            href="https://www.linkedin.com/in/mmurray-iv/"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>{" "}
          or via email at michael.murray.iv@gmail.com.
        </p>
      </div>
      <div className="flex items-center justify-center w-full md:w-1/2 mt-4 md:mt-0">
        <img
          src="/portrait.png"
          alt="Michael Murray"
          className="h-60 w-60 rounded-full object-cover object-top hidden md:block"
        />
      </div>
    </div>
  );
};

export default Profile;
