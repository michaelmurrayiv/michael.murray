export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <header className="w-full p-4 bg-gray-100 dark:bg-gray-800 shadow">
          <nav className="max-w-4xl mx-auto flex justify-between items-center">
            <a href="/" className="text-2xl font-bold">
              My Portfolio
            </a>
            <ul className="flex gap-4">
              <li>
                <a href="/about" className="hover:text-blue-500">
                  About Me
                </a>
              </li>
              <li>
                <a href="/resume" className="hover:text-blue-500">
                  Resume
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-blue-500">
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
