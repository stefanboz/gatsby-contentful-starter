import React from "react";

import Layout from "../components/layout";
import Head from "../components/head";

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me</h1>
      <a href="mailto:justsomerandomemail@mail.com">
        justsomerandomemail@yahoo.com
      </a>
      <div>
        My Twitter:{" "}
        <a href="https://twitter.com/" target="_blank">
          @my_twitter
        </a>
      </div>
    </Layout>
  );
};

export default ContactPage;
