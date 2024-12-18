import React from "react";
import Badge from "@/components/Tag";
import Link from "next/link";

const ProjectCard = ({
  title,
  date,
  description,
  badges,
  id,
}: {
  title: string;
  date: string;
  description: string;
  badges: string[];
  id: string;
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
      <Link
        href={`/projects/${id}`}
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        View More
      </Link>
    </li>
  );
};

export default ProjectCard;
