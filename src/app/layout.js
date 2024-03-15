import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Mulish } from 'next/font/google'
 
const mulish = Mulish({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Header/>
        {children}</body>
    </html>
  );
}
