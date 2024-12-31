import { About, Benefits, Founders, Home, Partners } from "../components";
import { Layout } from "../components/Layout";
import { PieChart3D } from "../components/PieChart3D";
export const HomePage = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Benefits />
      <Founders />

      
      {/* <BarChart /> */}
      <PieChart3D />

      <Partners />
    </Layout>
  );
};
