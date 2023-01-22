import * as React from "react";

// components
import Layout from "../components/layout/Layout";
import MainHero from "../components/pages/home/MainHero";
import OurServices from "../components/pages/home/OurServices";
import ServicesSection from "../components/pages/home/ServicesSection";

// providers
import LanguageProvider from "../providers/LanguageProvider";

const IndexPage = () => {
  return (
    <Layout>
      <MainHero />
      {/* <ServicesSection /> */}
      <OurServices />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
