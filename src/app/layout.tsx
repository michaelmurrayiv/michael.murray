import Link from 'next/link';
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <header className="w-full p-4 bg-gray-100 dark:bg-gray-800 shadow-md">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              My Portfolio
            </Link>

            {/* Navigation Links */}
            <ul className="hidden md:flex gap-8">
              <li>
                <Link href="/about" className="text-lg hover:text-blue-500 transition-all duration-300">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-lg hover:text-blue-500 transition-all duration-300">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-lg hover:text-blue-500 transition-all duration-300">
                  Projects
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Toggle Button */}
            <button className="md:hidden text-2xl text-gray-800 dark:text-gray-100" aria-label="Open menu">
              &#9776;
            </button>
          </nav>
        </header>
        <main className="max-w-7xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
