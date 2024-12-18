import React from "react";
import TypewriterEffect from "@/components/TypewriterEffect";

export default function AboutMe() {
  return (
    <section>
      <h6 className="text-2xl">michael murray</h6>

      <TypewriterEffect text="Hi, I'm Michael" speed={100} />
      <p>
        I am a software engineer from Seattle. I'm passionate about all things
        computer science, from software engineering to deep learning to
        cybersecurity. I enjoy learning new technologies and working on fun
        projects.
      </p>

      <div className="mt-6">
        <div className="flex gap-4">
          {/* GitHub Logo */}
          <a
            href="https://github.com/michaelmurrayiv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/github.svg"
              alt="GitHub Logo"
              className="w-12 h-12 rounded-full transition-transform transform hover:scale-110"
            />
          </a>

          {/* LinkedIn Logo */}
          <a
            href="https://www.linkedin.com/in/mmurray-iv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/linkedin.svg"
              alt="LinkedIn Logo"
              className="w-12 h-12 rounded-full object-cover transition-transform transform hover:scale-110"
            />
          </a>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-2">Want to reach out?</h2>
      <div className="flex items-center space-x-3">
        <img
          src="/email.svg"
          alt="Email Logo"
          className="w-10 h-10 rounded-full"
        />
        <p className="underline text-xl">michael.murray.iv@gmail.com</p>
      </div>
      <div className="flex items-center space-x-3">
        <img
          src="/location.svg"
          alt="Location Logo"
          className="w-10 h-10 rounded-full"
        />
        <p className="text-xl">Seattle, Washington, USA</p>
      </div>
    </section>
  );
}
