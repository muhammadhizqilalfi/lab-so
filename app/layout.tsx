import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lab Sistem Operasi B",
  description: "Web Praktikum Sistem Operasi B",
  icons: {
    icon: "assets/linux.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        {children}
      </body>
    </html>
  );
}
