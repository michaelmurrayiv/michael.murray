import React from "react";

const ContactInfo = () => {
  return (
    <div>
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
    </div>
  );
};

export default ContactInfo;
