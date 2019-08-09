import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import styled from 'styled-components';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Title from 'components/title';
import {
  primary,
  primaryLight,
  secondary,
  secondaryLight,
} from '../constants/theme';

// const ContentBox = styled(Box)`
//   margin: 0 auto;
// `;

const PrevAndNext = styled.div`
  width: 100%;
  ul {
    background: ${secondaryLight};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 2rem 1rem;
    margin: 0 auto;
    max-width: 1000px;
  }
`;

export const ButtonLink = styled(Link)`
  -webkit-appearance: none;
  background-color: ${secondary};
  border-radius: 5px;
  border: none;
  color: #757575;
  border: 1px solid #ddd;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0rem;
  padding: 1rem 2rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.2s background-color ease;

  &:active,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    outline: none;
  }

  &:hover {
    background-color: #f9f9f9;
  }

  & + & {
    margin-left: 1rem;
  }
`;

// eslint-disable-next-line react/display-name
export default ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { title, source, date, image } = post.frontmatter;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <Head pageTitle={title} />
      <Box centered>
        <Title as="h3" size="medium">
          {title}
        </Title>
        <Title as="h4" size="small">
          {date}
        </Title>
        <a href={source}>View on GitHub</a>
        <div style={{ maxHeight: '400px', height: '400px' }}>
          <Img
            style={{ maxHeight: '100%' }}
            imgStyle={{ objectFit: 'contain' }}
            fluid={image ? image.childImageSharp.fluid : {}}
            alt={title}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Box>

      {/* <Box fluid> */}
      <PrevAndNext>
        <ul>
          <li>
            {previous && (
              <ButtonLink to={`${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </ButtonLink>
            )}
          </li>
          <li>Browse more projects</li>
          <li>
            {next && (
              <ButtonLink to={`${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </ButtonLink>
            )}
          </li>
        </ul>
      </PrevAndNext>
      {/* </Box> */}
    </Layout>
  );
};
export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        source
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
