export interface CaisyDocument_Meta {
  createdAt: Date,
  firstPublishedAt: Date,
  id: string,
  locale: string,
  locales: string[],
  publishedAt: Date,
  updatedAt: Date,
}

export interface ConnectionEdge<T> {
  node?: T,
}

export interface JSONBody {
  content: {
    attrs: unknown,
    content: {
      text: string,
      type: string,
    }[],
  }[],
  type: string,
}
