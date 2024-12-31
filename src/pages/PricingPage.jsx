import { TeamTop } from "../components"
import { Costing } from "../components/Costing"
import { Layout } from "../components/Layout"
import { PricingTop } from "../components/PricingTop"

export const PricingPage = () => {
    return (
        <Layout>
            <PricingTop />
            <Costing />
        </Layout>
    )
}