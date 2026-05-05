import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

// Load Open Sans
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Bringing in multiple weights for fluidity
});

export const metadata: Metadata = {
  title: "John Wesly | Software Developer",
  description: "Portfolio of John Wesly Patric Dinakaran, specializing in MERN stack and IoT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // Applied openSans.className here
      className={`${openSans.className} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-midnight text-white">
        {children}
      </body>
    </html>
  );
}