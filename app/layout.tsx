import RegisteredModal from "./components/Modals/RegisteredModal";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "yacht",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisteredModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
