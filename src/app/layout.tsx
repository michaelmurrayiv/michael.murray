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
        <header className="flex justify-between items-center p-6 bg-slate-100 dark:bg-gray-800 shadow-md">
          <Link
            href="/"
            className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
          >
            michael's website
          </Link>
        </header>

        <main className="max-w-7xl mx-auto p-6 bg-slate-50 dark:bg-gray-900">
          {children}
        </main>
      </body>
    </html>
  );
}
