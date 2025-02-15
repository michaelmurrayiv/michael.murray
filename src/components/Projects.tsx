import React from "react";
import { projects } from "@/data/Constants";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold mb-7">Projects</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            date={project.date}
            description={project.description}
            tags={project.tags}
            id = {project.id}
          />
        ))}
      </ul>
    </div>
  )};

export default Projects;