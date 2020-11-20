import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Welcome to new ModernJSDev Podcast site.</p>
    <ImageCarousel />
  </Layout>
);

export default IndexPage;
