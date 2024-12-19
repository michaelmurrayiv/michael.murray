import Link from "next/link";
import "./globals.css";
import SocialLinks from "@/components/SocialLinks";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <header className="flex justify-between items-center p-6 bg-slate-100 dark:bg-gray-800 shadow-md">
          <Link
            href="/"
            className="text-3xl font-semibold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-gray-300 cursor-pointer"
          >
            michael&apos;s website
          </Link>
          <SocialLinks />
        </header>

        <main className="max-w-7xl mx-auto p-6 dark:bg-gray-900">
          {children}
        </main>
      </body>
    </html>
  );
}
