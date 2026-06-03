import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants"; // Imported your updated constants

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`, 
    default: `${APP_NAME} — Daycare Center`, 
  },
  description: APP_DESCRIPTION, 
  metadataBase: new URL(SERVER_URL), // Ensures valid absolute URLs for OpenGraph/SEO images
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
