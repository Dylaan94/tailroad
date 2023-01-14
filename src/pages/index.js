import * as React from "react";

// components
import Layout from "../components/layout/Layout";
import MainHero from "../components/pages/home/MainHero";
import ServicesSection from "../components/pages/home/ServicesSection";

// providers
import LanguageProvider from "../providers/LanguageProvider";

const IndexPage = () => {
  return (
    <Layout>
      <MainHero />
      <ServicesSection />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
