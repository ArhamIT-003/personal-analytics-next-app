import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Provider } from "@/context/ThemeContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maklytics",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`max-w-screen-full overflow-y-auto bg-white text-black dark:bg-black dark:text-white ${inter.className}`}
      >
        <Provider>
          <div className="mx-auto max-w-screen-xl px-16 min-h-screen flex flex-col justify-between">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
