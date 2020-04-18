import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>Name: Stefan</p>
      <p>Last name: Bozic</p>
      <p>Year of birth: 1985</p>
      <div>
        <Link to="/contact">Contact Me</Link>
      </div>
    </Layout>
  );
};

export default AboutPage;
