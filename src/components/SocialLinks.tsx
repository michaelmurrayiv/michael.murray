import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex gap-4 mt-6">
      <a
        href="https://github.com/michaelmurrayiv"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/github.svg"
          alt="GitHub Logo"
          className="w-12 h-12 rounded-full transition-transform transform hover:scale-110 filter dark:invert"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/mmurray-iv/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/linkedin.svg"
          alt="LinkedIn Logo"
          className="w-12 h-12 rounded-full object-cover transition-transform transform hover:scale-110 filter dark:invert"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
