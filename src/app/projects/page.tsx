const projects = [
  { name: "NBA Predictor", description: "Built with PyTorch" },
  { name: "Thread Library", description: "Implemented in C on Linux" },
];

export default function Projects() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <ul>
        {projects.map((project, idx) => (
          <li key={idx} className="mb-4">
            <h2 className="text-2xl font-semibold">{project.name}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
