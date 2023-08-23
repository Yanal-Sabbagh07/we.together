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
      <body className="w-full font-Helvetica ">
        <div className=" hidden items-center justify-center border lg:flex">
          <Navbar />
        </div>
        <div className=" fixed left-0 top-0 flex w-screen lg:hidden ">
          <MobileNav />
        </div>
        <div className=" flex items-center justify-center ">
          <div className=" w-[calc(100vw-24px)] lg:block lg:w-[calc(100vw-128px)] lg:bg-transparent ">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
