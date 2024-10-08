export interface CaisyMeta {
  createdAt: Date;
  id: string;
  locale: string;
  locales: string[];
  publishedAt: Date;
  updatedAt: Date;
}

export interface ConnectionEdge<T> {
  node?: T;
}

export interface JSONBody {
  content: {
    attrs: unknown;
    content: {
      text: string;
      type: string;
    }[];
  }[];
  type: string;
}

export interface Asset {
  author: string;
  blurHash: string;
  copyright?: string;
  description?: string;
  dominantColor: string;
  height: number;
  id: string;
  keywords?: string | string[];
  originType: string;
  originalName: string;
  src: string;
  title: string;
  width: number;
}
