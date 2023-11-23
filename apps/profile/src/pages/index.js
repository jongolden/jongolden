import React from 'react';
import { graphql } from 'gatsby';
import About from '../components/About';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import Projects from '../components/Projects'
import Skills from '../components/Skills';

const Index = ({ data }) => (
  <Layout>
    <Seo />
    <Hero
      title={data.site.siteMetadata.title}
      subtitle={data.site.siteMetadata.jobTitle}
    />
    <About />
    <Skills />
    <Projects />
  </Layout>
);

export default Index;

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        jobTitle
      }
    }
  }
`;
