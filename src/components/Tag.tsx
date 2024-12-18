import React from "react";

const colorMap: Record<string, string> = {
  Java: "bg-orange-500",
  C: "bg-red-600",
  Python: "bg-blue-300",
  React: "bg-blue-500",
  Express: "bg-gray-600",
  MongoDB: "bg-green-500",
  TypeScript: "bg-blue-600",
  "React Native": "bg-indigo-600",
  PyTorch: "bg-red-500",
  "Hugging Face": "bg-purple-600",
};

interface TagProps {
  name: string;
}

const Tag: React.FC<TagProps> = ({ name }) => {
  const bgColor = colorMap[name] || "bg-gray-500"; // default color

  return (
    <span
      className={`inline-block px-4 py-2 rounded-full text-sm font-medium text-white ${bgColor}`}
    >
      {name}
    </span>
  );
};

export default Tag;
