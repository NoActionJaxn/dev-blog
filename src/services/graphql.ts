import { gql, GraphQLClient } from 'graphql-request';
import type { GetPost } from '../types/posts';

const client = new GraphQLClient(
  `https://cloud.caisy.io/api/v3/e/${import.meta.env.CAISY_PROJECT_ID}/graphql`,
  {
    headers: {
      'x-caisy-apikey': import.meta.env.CAISY_API_KEY
    }
  }
);

export const getPosts: GetPost = await client.request(gql`
  query getAllPosts {
    allPost(sort: { publishedAt: DESC }) {
      edges {
        node {
          _meta {
            createdAt
						firstPublishedAt
						publishedAt
						updatedAt
          }
          title
          tagline
          body {
            json
          }
          tags
          slug
          id
        }
      }
    }
  }
`);

export const getRecentPosts: GetPost = await client.request(gql`
  query getAllPosts {
    allPost(sort: { publishedAt: DESC }, first: 3) {
      edges {
        node {
          _meta {
            createdAt
						firstPublishedAt
						publishedAt
						updatedAt
          }
          title
          tagline
          body {
            json
          }
          tags
          slug
          id
        }
      }
    }
  }
`);

