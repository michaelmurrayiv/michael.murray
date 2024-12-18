import React from "react";
import Tag from "@/components/Tag";
import Link from "next/link";

const ProjectCard = ({
  title,
  date,
  description,
  tags,
  id,
}: {
  title: string;
  date: string;
  description: string;
  tags: string[];
  id?: string;
}) => {
  return (
    <li className="panel flex flex-col justify-between h-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-lg shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-500">
      <h3 className="font-semibold">{title}</h3>
      <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
      <p className="flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <Tag key={index} name={tag} />
        ))}
      </div>
      {id && (
        <Link
          href={`/${id}`}
          className="text-blue-500 hover:underline mt-2 inline-block text-center border-t pt-2 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Demo
        </Link>
      )}
    </li>
  );
};

export default ProjectCard;
