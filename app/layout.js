import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const metadata = {
  title: "WeFrameTech",
  description: "Build By Devender Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="font-sans">
        {/* Header will always be present */}
        <Header />
        {/* Main content section */}
        <main>{children}</main>
        {/* Footer will also be always be present */}
        <Footer />
      </body>
    </html>
  );
}
