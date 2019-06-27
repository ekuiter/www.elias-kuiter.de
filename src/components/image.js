import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default ({ src, fixed = false, size = 'large', ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fixed {
              ...GatsbyImageSharpFixed
            }

            largeFluid: fluid(maxWidth: 960, quality: 80) {
              ...GatsbyImageSharpFluid
            }

            mediumFluid: fluid(maxWidth: 320, quality: 80) {
              ...GatsbyImageSharpFluid
            }

            smallFluid: fluid(maxWidth: 100, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const edge = data.allImageSharp.edges.find((element) =>
    (element.node.fixed.src.split('/').pop() === src));

  return edge
    ? fixed
      ? <Img fixed={edge.node.fixed} {...props} />
      : size === 'large'
        ? <Img fluid={edge.node.largeFluid} {...props} />
        : size === 'medium'
          ? <Img fluid={edge.node.mediumFluid} {...props} />
          : <Img fluid={edge.node.smallFluid} {...props} />
    : null;
};