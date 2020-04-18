import React from "react";
import { Link } from "gatsby";

import Head from "../components/head";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello !!!</h1>
      <h2>I'm Stefan, a FE developer from Belgrade, Serbia</h2>
      <p>
        <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
