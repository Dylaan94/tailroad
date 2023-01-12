import * as React from "react";

// components
import Layout from "../components/layout/Layout";
import MainHero from "../components/pages/home/MainHero";

// providers
import LanguageProvider from "../providers/LanguageProvider";

const IndexPage = () => {
  return (
    <LanguageProvider>
      <Layout>
        <MainHero />
      </Layout>
    </LanguageProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
