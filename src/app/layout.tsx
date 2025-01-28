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
      <body className="bg-slate-50 text-gray-900 0">
        <header className="flex justify-between items-center p-6 bg-slate-100">
          <Link
            href="/"
            className="text-3xl font-semibold text-gray-900  hover:text-blue-500 cursor-pointer"
          >
            michael&apos;s website
          </Link>
          <SocialLinks />
        </header>

        <main className="max-w-7xl mx-auto p-6 ">
          {children}
        </main>
      </body>
    </html>
  );
}
