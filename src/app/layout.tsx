import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <header className="bg-gray-800 text-white p-4">
          <nav>
            <ul className="flex space-x-4">
              {/* Navigation Links */}
              <li>
                <Link href="/" className="text-white hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/chatbot"
                  className="text-white hover:text-gray-400"
                >
                  Chatbot
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="max-w-7xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
