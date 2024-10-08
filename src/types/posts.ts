import type { CaisyMeta, ConnectionEdge, JSONBody } from "./caisy"

export interface GetPosts {
  allPost: {
    edges?: ConnectionEdge<Post>[],
    type: string,
  }
}

export interface GetPostTags {
  allPost: {
    edges?: ConnectionEdge<PostTags>[],
    type: string,
  }
}
export interface Post {
  _meta: CaisyMeta,
  title: string,
  tagline?: string,
  body?: {
    json?: JSONBody,
  },
  tags?: Tag[],
  slug: string,
}

export interface PostTags {
  _meta: CaisyMeta,
  tags?: Tag[],
}

export interface Tag {
  id: string,
  tag: string,
}
