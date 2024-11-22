import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Darker_Grotesque } from "next/font/google";


const DMSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: "400",





})

const Grotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darker-grotesque",
  weight: "300",

})
export const metadata: Metadata = {
  title: "Todo list App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${DMSans.variable} ${Grotesque.variable} font-DM_Sans `}
      >
        {children}
      </body>
    </html>
  );
}