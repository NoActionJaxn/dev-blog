import type { CaisyDocument_Meta, ConnectionEdge } from "./caisy"

export interface GetPost {
  allPost: {
    edges?: ConnectionEdge<Post>[],
    type: string,
  }
}

export interface Post {
  _meta: CaisyDocument_Meta,
  title: string,
  tagline?: string,
  body?: {
    json?: {
      content: {
        attrs: unknown,
        content: {
          text: string,
          type: string,
        }[],
      }[],
      type: string,
    },
  },
  tags?: string[],
  slug: string,
}
