import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ImageCarousel from "../components/ImageCarousel";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ImageCarousel />
    <p>Welcome to new ModernJSDev Podcast site.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage;
