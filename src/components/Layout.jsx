import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SendResume } from "./SendResume";
import { SideNav } from "./SideNav";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="bg"></div>
      <SideNav />
      <Header />
      {children}
      <Banner />
      <SendResume />
      <Footer />
    </>
  );
};
