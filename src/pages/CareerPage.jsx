import { Team, TeamTop } from "../components";
import { Career } from "../components/Career";
import { CareerTop } from "../components/CareerTop";
import { Layout } from "../components/Layout";
export const CareerPage = () => {
  return (
    <Layout>
      <CareerTop />
      <Career />
    </Layout>
  );
};
