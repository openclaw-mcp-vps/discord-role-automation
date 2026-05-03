import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Role Automation — Auto-assign roles from GitHub activity",
  description: "Automatically grant Discord roles based on GitHub contributions and repo access. Built for open source maintainers and developer communities."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ec0b26a5-c6a7-4075-a808-024f87e08507"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
