export default function About() {
  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-gray-200">
        About Me
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
        Hi, I'm <span className="font-semibold">Michael</span>, a passionate
        computer science student with experience in machine learning, React, and
        system programming.
      </p>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        When I’m not coding, I enjoy{" "}
        <span className="font-semibold">basketball</span>,{" "}
        <span className="font-semibold">mountain biking</span>, and exploring
        new projects.
      </p>
    </section>
  );
}
