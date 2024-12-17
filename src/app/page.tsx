import React from "react";
import TypewriterEffect from "@/components/TypewriterEffect";

export default function AboutMe() {
  return (
    <section>
      <h6 className="text-2xl p-4">michael murray</h6>

      <TypewriterEffect text="Hi, I'm Michael"
        speed={100}
      />
      <p>
        I am a software engineer passionate about coding and problem-solving. I
        enjoy building innovative solutions and learning new technologies.
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
              className="w-10 h-10 rounded-full transition-transform transform hover:scale-110"
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
              className="w-10 h-10 rounded-full object-cover transition-transform transform hover:scale-110"
            />
          </a>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-2">Connect with me:</h2>
    </section>
  );
}
