import React from "react";
import Badge from "@/components/Tag";

const ProjectCard = ({
  title,
  date,
  description,
  badges,
}: {
  title: string;
  date: string;
  description: string;
  badges: string[];
}) => {
  return (
    <li className="panel">
      <h3 className="font-semibold">{title}</h3>
      <span className="text-sm text-gray-500">{date}</span>
      <p>{description}</p>
      <div className="flex flex-wrap gap-4">
        {badges.map((badge, index) => (
          <Badge key={index} name={badge} />
        ))}
      </div>
    </li>
  );
};

export default ProjectCard;
