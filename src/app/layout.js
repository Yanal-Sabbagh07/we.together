import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "We.together",
  description: "Online Selbsthilfegruppen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Helvetica">
        <div className=" flex items-center justify-center">
          <Navbar />
        </div>
        <div className="flex items-center justify-center ">
          <div className="w-[calc(100vw-128px)] ">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
