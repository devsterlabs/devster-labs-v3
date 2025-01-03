import { About, Benefits, Founders, Home, Partners } from "../components";
import { HireUsSide } from "../components/HireUsSide";
import { Layout } from "../components/Layout";
export const HomePage = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Benefits />
      <Founders />

      
      {/* <BarChart /> */}
      {/* <PieChart3D /> */}
      <Partners />
      <HireUsSide />
    </Layout>
  );
};
