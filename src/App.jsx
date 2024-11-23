import React from "react";
import { About, Banner, Benefits, Footer, Founders, Header, Home, Partners, SendResume, SideNav, Team } from "./components";

function App() {
  return (
    <>
    <div className="bg"></div>
    <SideNav />
    <Header />
    <Home />
    <About />
    <Benefits />
    <Founders />
    <Partners />
    <Team />
    <Banner />
    <SendResume />
    <Footer />
    </>
  );
}

export default App;
