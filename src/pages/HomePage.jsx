import { About, Benefits, Founders, Home, Partners } from "../components";
import { Layout } from "../components/Layout";
import LineChart from "../components/LineChart";
export const HomePage = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Benefits />
      <Founders />

      
      <LineChart />

      <Partners />
    </Layout>
  );
};
