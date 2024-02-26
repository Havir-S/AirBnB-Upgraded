import Footer from "@/components/Footer";
import Header from "@/components/Header.js";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <Header /> */}
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}