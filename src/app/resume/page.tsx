export default function Resume() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-4">Resume</h1>
      <p>Download my resume below:</p>
      <a href="/resume.pdf" className="text-blue-500 underline" download>
        Download Resume (PDF)
      </a>
    </section>
  );
}
