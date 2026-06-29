import Footer from "@/components/shared/Footer";
import ButtonFooter from "@/components/shared/Footer/ButtonFooter";
import Header from "@/components/shared/Header";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <ButtonFooter />
      <Footer />
    </>
  );
}
