import React from "react";
import ProfileSection from "@/components/Profile";
import SocialLinks from "@/components/SocialLinks";
import ProjectCard from "@/components/Projects";
import ContactInfo from "@/components/ContactInfo";

export default function Home() {
  const projects = [
    {
      title: "Interactive Chat Bot (Deep Learning)",
      date: "Nov 2024 – Dec 2024",
      description:
        "Leveraged pre-trained transformer models to code a chat bot which helps with common job search related tasks. Created an interface capable of job description analysis, cover letter generation, and sentence auto-completion.",
      badges: ["PyTorch", "Python", "Hugging Face"],
    },
    {
      title: "Web Application - GAEIA",
      date: "Feb 2024 – Apr 2024",
      description:
        "Developed a web application using the MERN tech stack to host communications and ethical dilemma work. Created the Events page, including a calendar view, RSVPing, and event exportation.",
      badges: ["React", "Express", "MongoDB"],
    },
    {
      title: "Mini Language Compiler (Compiler Construction)",
      date: "Mar 2024 – Jun 2024",
      description:
        "Created a compiler for programs written in the “Mini” language, a subset of the C programming language. Implemented AST translation into LLVM IR and three different code optimizations.",
      badges: ["Java"],
    },
    {
      title: "Open Recipes - Mobile App (Intro to Software Engineering)",
      date: "Nov 2023 – Dec 2023",
      description:
        "Developed a mobile app for personalized recipes while adhering to Agile programming practices. Implemented a “create new recipe” form which accepted recipe details and stored them in a MongoDB database.",
      badges: ["React Native", "Express", "MongoDB"],
    },
  ];

  return (
    <section>
      <ProfileSection />
      <SocialLinks />
      <br />
      <h2 className="text-2xl font-semibold mb-2">Projects</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            date={project.date}
            description={project.description}
            badges={project.badges}
          />
        ))}
      </ul>
      <br />
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
      <br />
      <div>
        <h2 className="text-2xl font-semibold mb-2">
          Certifications and Badges
        </h2>
        <p>Here are all of my cool memoribilia! Woo!</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <li className="flex flex-col items-center text-center">
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
            <img
              src="responsible_tech_scholar.png"
              alt="Responsible Tech Scholar"
              className="w-20 h-20 mb-2 object-contain"
            />
            <p className="font-semibold">GAEIA Responsible Tech Scholar</p>
          </li>
        </ul>
      </div>
      <br />
      <ContactInfo />
    </section>
  );
}
