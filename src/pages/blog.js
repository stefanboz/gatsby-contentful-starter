import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";

import blogStyles from "./blog.module.scss";

export const query = graphql`
  query {
    allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`;

const BlogPage = (props) => {
  const posts = props.data.allContentfulBlogPost.edges;

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <p>Posts will show up here later on...</p>
      <ol className={blogStyles.posts}>
        {posts.map((post) => {
          return (
            <li className={blogStyles.post} key={`${Math.random()}`}>
              <Link to={`/blog/${post.node.slug}`}>
                <h2>{post.node.title}</h2>
                <p>{post.node.publishedDate}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
