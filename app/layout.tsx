import type { Metadata } from "next";
import { VercelToolbar } from "@vercel/toolbar/next";
import { VercelAnalytics } from "@/components/analytics";

import "./globals.css";

export const metadata: Metadata = {
  title: "Shirt Shop",
  description:
    "An example repository showing how to use @vercel/flags for Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {children}

        <VercelToolbar />
        <VercelAnalytics />
      </body>
    </html>
  );
}
