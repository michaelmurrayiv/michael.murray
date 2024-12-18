import React from "react";
import TypewriterEffect from "@/components/TypewriterEffect";
import Badge from "@/components/Badge";

export default function AboutMe() {
  return (
    <section>
      <div className="flex">
        <div className="w-1/2">
          <h6 className="text-2xl">michael murray</h6>
          <br></br>
          <TypewriterEffect text="Hi, I'm Michael" speed={100} />
          <p>
            <br></br>I am a software engineer from Seattle.
            <br></br>
            I'm passionate about all things computer science, from software
            engineering to deep learning to cybersecurity.
            <br></br>I enjoy learning new technologies and working on fun
            projects.
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

      <br></br>

      <h2 className="text-2xl font-semibold mb-2">Projects</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <li className="panel">
          <h3 className="font-semibold">
            Interactive Chat Bot (Deep Learning)
          </h3>
          <span className="text-sm text-gray-500">Nov 2024 – Dec 2024</span>
          <p>
            Leveraged pre-trained transformer models to code a chat bot which
            helps with common job search related tasks. Created an interface
            capable of job description analysis, cover letter generation, and
            sentence auto-completion.
          </p>
          <div className="flex flex-wrap gap-4">
            <Badge name="PyTorch" />
            <Badge name="Python" />
            <Badge name="Hugging Face" />
          </div>
        </li>

        <li className="panel">
          <h3 className="font-semibold">Web Application - GAEIA</h3>
          <span className="text-sm text-gray-500">Feb 2024 – Apr 2024</span>
          <p>
            Developed a web application using the MERN tech stack to host
            communications and ethical dilemma work. Created the Events page,
            including a calendar view, RSVPing, and event exportation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Badge name="React" />
            <Badge name="Express" />
            <Badge name="MongoDB" />
          </div>
        </li>

        <li className="panel">
          <h3 className="font-semibold">
            Mini Language Compiler (Compiler Construction)
          </h3>
          <span className="text-sm text-gray-500">Mar 2024 – Jun 2024</span>
          <p>
            Created a compiler for programs written in the “Mini” language, a
            subset of the C programming language. Implemented AST translation
            into LLVM IR and three different code optimizations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Badge name="Java" />
          </div>
        </li>

        <li className="panel">
          <h3 className="font-semibold">
            Open Recipes - Mobile App (Intro to Software Engineering)
          </h3>
          <span className="text-sm text-gray-500">Nov 2023 – Dec 2023</span>
          <p>
            Developed a mobile app for personalized recipes while adhering to
            Agile programming practices. Implemented a “create new recipe” form
            which accepted recipe details and stored them in a MongoDB database.
          </p>
          <div className="flex flex-wrap gap-4">
            <Badge name="React Native" />
            <Badge name="Express" />
            <Badge name="MongoDB" />
          </div>
        </li>
      </ul>
      <br></br>
      <h2 className="text-2xl font-semibold mb-2">Education</h2>
      <ul>
        <li>
          <h3 className="font-semibold">
            Bachelor of Science in Computer Science
          </h3>
          <span className="text-sm text-gray-500">Sep 2020 – Mar 2025</span>
          <p>Cal Poly, San Luis Obispo</p>
          <p className="text-sm text-gray-600">Minor in Philosophy</p>
          <p className="text-sm text-gray-600">
            President's List (2020 – 2024)
          </p>
        </li>
      </ul>

      <br></br>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Certifications and Badges</h2>
        <p>Here are all of my cool memoribilia! Woo!</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <li className="flex flex-col items-center text-center">
            {/* Placeholder logo */}
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
          <li className="flex flex-col items-center text-center">
            {/* GAEIA badge */}
            <img
              src="responsible_tech_scholar.png"
              alt="Responsible Tech Scholar"
              className="w-20 h-20 mb-2 object-contain"
            />
            <p className="font-semibold">GAEIA Responsible Tech Scholar</p>
          </li>
        </ul>
      </div>

      <br></br>
      
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
