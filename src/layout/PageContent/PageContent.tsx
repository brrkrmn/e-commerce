import type { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const PageContent = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex-grow w-full">{children}</main>
      <Footer />
    </>
  );
};

export default PageContent;
