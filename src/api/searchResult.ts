export interface SearchResult {
  contentJsons: {
    anchors: Array<{
      json: {
        elements: SearchItem[]
      }
    }>
  }
}

export interface SearchItem {
  elementType: string,
  id: string,
  href: string,
  image: Image,
  fiveColumnGrid: boolean,
  dynamicInList: boolean,
  title: string,
  type: string,
  quantity: string,
  ratingAmount: number,
  ratingValue: number,
  ratingLink: string,
  brand: string,
  price: string,
  priceContext: string,
  priceContextHiddenText: string,
  priceContextPrice: string,
  priceContextAmount: string,
  currency: string,
  unmarkedSaving: boolean,
  additionalPriceInfo: AdditionalPriceInfo,
  udoCat: string[],
  wishlistTitle: string,
  wishlistUrl: string,
  productAriaLabel: string,
  declarationIcons: string[],
  declarationIconsText: string[],
  fastCheckout: boolean,
  variableAmount: boolean 
}

export interface Image  {
  lazyload: boolean,
  lazyloadSrc: string,
  loader: string,
  sizes: { [key: string]: string },
  src: string,
  altText: string,
  srcset: Array<[string, string]>
}

export interface AdditionalPriceInfo  {
  text: string,
  link: string
}
