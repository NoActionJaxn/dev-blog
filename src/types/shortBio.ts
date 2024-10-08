import type { Asset, CaisyMeta } from "./caisy";

export interface ShortBio {
  ShortBio: {
    _meta: CaisyMeta,
    id: string,
    intro: string,
    name: string,
    description: string,
    avatar: Asset,
  }
}
