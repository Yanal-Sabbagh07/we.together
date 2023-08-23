import "./globals.css";
import Footer from "@/components/Footer";
import MobileNav from "@/components/header/MobileNav";
import Navbar from "@/components/header/Navbar";

export const metadata = {
  title: "We.together",
  description: "Online Selbsthilfegruppen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Helvetica w-full overflow-x-hidden">
        <div className=" hidden lg:flex items-center justify-center border">
          <Navbar />
        </div>
        <div className=" flex lg:hidden ">
          <MobileNav />
        </div>
        <div className=" flex items-center justify-center ">
          <div className="hidden w-[calc(100vw-24px)] lg:block lg:w-[calc(100vw-128px)] ">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
