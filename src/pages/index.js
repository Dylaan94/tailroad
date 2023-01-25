import * as React from "react";

// components
import Layout from "../components/layout/Layout";
import MainHero from "../components/pages/home/MainHero";
import OurServices from "../components/pages/home/OurServices";
import ServicesSection from "../components/pages/home/ServicesSection";
import Banner from "../components/Banner";

// providers
import LanguageProvider from "../providers/LanguageProvider";

// content for the banner in tuples for en and jp. header, subheader, content
const content = [
  ["navigate the road to business growth", ""],
  ["unleash your company's full potential with tailroad", ""],
  [
    "we empower businesses on their journey to success. Discover our expert services in our interactive IDE below. Click on the tabs to explore how we cna help your business thrive",
    "",
  ],
];

const IndexPage = () => {
  return (
    <Layout>
      <MainHero />
      <Banner
        header={content[0][0]}
        subheader={content[1][0]}
        content={content[2][0]}
        colour={"primary-green"}
      />
      <OurServices />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
