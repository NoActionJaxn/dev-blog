import { gql, GraphQLClient } from 'graphql-request';
import type { GetPosts } from '../types/posts';

export const client = new GraphQLClient(
  `https://cloud.caisy.io/api/v3/e/${import.meta.env.CAISY_PROJECT_ID}/graphql`,
  {
    headers: {
      'x-caisy-apikey': import.meta.env.CAISY_API_KEY
    }
  }
);

export const getPosts: GetPosts = await client.request(gql`
  query getAllPosts {
    allPost(sort: { publishedAt: DESC }) {
      edges {
        node {
          _meta {
            createdAt
						publishedAt
						updatedAt
          }
          title
          tagline
          body {
            json
          }
          tags {
            ... on CustomTag {
              id
              tag
            }
          }
          slug
          id
        }
      }
    }
  }
`);
