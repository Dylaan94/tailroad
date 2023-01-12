import * as React from "react";

import Layout from "../components/layout/Layout";

import LanguageProvider from "../providers/LanguageProvider";

const IndexPage = () => {
  return (
    <LanguageProvider>
      <Layout>
        <main>
          <h2 className="text-xl"> Hello World </h2>
        </main>
      </Layout>
    </LanguageProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
