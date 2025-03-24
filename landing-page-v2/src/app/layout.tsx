import type { Metadata } from "next";
import { Montserrat, Poppins, Monoton } from "next/font/google";
import "./globals.css";
import "boxicons/css/boxicons.min.css";
import Icon from "./components/Icon";




const textcolor =  "rgb(246, 252, 195)";
const backgroundcolor = "linear-gradient(to right, #000000, #231D6A)";


const monoton = Monoton({
  variable: "--font-monoton",
  weight: "400",
  subsets: ["latin"],
})

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "500",
  subsets: ["latin"]
});

const montserrat = Montserrat({
  variable: "--font-Montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio-Page",
  description: "DevSilveira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} ${monoton.variable} antialiased`}
        
      >
        {children}
      </body>
    </html>
  );
}
