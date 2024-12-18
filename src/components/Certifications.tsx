import React from 'react';

const Certifications = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Certifications and Badges</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <li className="flex flex-col items-center text-center panel">
          <img
            src="cisco.svg"
            alt="Cisco Logo"
            className="w-20 h-20 mb-2 object-contain"
          />
          <p className="font-semibold">
            Cisco Intro to Software Engineering Virtual Experience Program
          </p>
          <a
            href="cisco.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:underline"
          >
            View Certificate
          </a>
        </li>
        <li className="flex flex-col items-center text-center panel">
          <img
            src="responsible_tech_scholar.png"
            alt="Responsible Tech Scholar"
            className="w-20 h-20 mb-2 object-contain"
          />
          <p className="font-semibold">GAEIA Responsible Tech Scholar</p>
        </li>
      </ul>
    </div>
  );
}

export default Certifications;