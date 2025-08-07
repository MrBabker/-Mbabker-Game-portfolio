import type { Metadata } from "next";
import { Bungee, Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TransitionOverlay from "@/components/TransitionOverlay";
import AutoContext from "@/components/Context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"], // أو latin-ext أو حسب الحاجة
  weight: ["400", "700"], // إن كنت تحتاج أوزان معينة
  variable: "--font-roboto", // اسم الـ CSS Variable
});

const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bungee",
});

export const metadata: Metadata = {
  title: "( Mbabker ) Mohammed Babiker Alamin Alsunni portfolio",
  description:
    "It is a protfolio and works and projects of ( Mbabker ) Mohammed Babiker Alamin Alsunni",
  icons: {
    icon: "/GamePad.png",
    shortcut: "/GamePad.png",
    apple: "/GamePad.png",
  },
  openGraph: {
    title: "( Mbabker ) Mohammed Babiker Alamin Alsunni portfolio",
    description:
      "Welcom to protfolio and works and projects of ( Mbabker ) Mohammed Babiker Alamin Alsunni",
    images: [
      {
        url: "/GamePad",
        width: 1200,
        height: 630,
        alt: "( Mbabker ) Mohammed Babiker Alamin Alsunni portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${bungee.variable} antialiased`}>
        <AutoContext>
          <TransitionOverlay />
          <ToastContainer position="top-center" />
          {children}
        </AutoContext>
      </body>
    </html>
  );
}
