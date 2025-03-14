import React from "react";
import TypewriterEffect from "@/components/TypewriterEffect";

const Profile = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left side - Text */}
      <div className="w-full md:w-1/2">
        <TypewriterEffect text="Hi, I'm Michael!" speed={100} />
        <p className="text-lg mt-2">
          I am a recent Computer Science graduate from Cal Poly with interests
          in software engineering, machine learning, and cybersecurity. I thrive
          on tackling complex challenges and continuously expanding my technical
          skills through hands-on projects.
        </p>
        <p className="text-lg mt-2">
          Outside of work, I enjoy staying active through basketball and
          mountain biking, and I’m always looking for opportunities to
          learn—whether through reading or exploring new technologies.
        </p>
        <p className="text-lg mt-2">
          Feel free to connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/mmurray-iv/"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>{" "}
          or reach out via email at{" "}
          <span className="underline">michael.murray.iv@gmail.com</span>.
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
