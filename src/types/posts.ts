import type { CaisyDocument_Meta, ConnectionEdge, JSONBody } from "./caisy"

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
    json?: JSONBody,
  },
  tags?: string[],
  slug: string,
}
