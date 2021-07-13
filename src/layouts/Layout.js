// import Header from "@/components/Header";

import Dynamic from "next/dynamic";
import Footer from "@/components/Footer";

const Header = Dynamic(() => import("@/components/Header"), {
  ssr: false,
});

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
