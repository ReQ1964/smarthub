export interface IShowcaseProduct {
  id: string;
  name: string;
  colors: Array<string>;
  company: string;
  price: number;
  img: string | string[];
}

export interface IDetailedProduct extends IShowcaseProduct {
  type: string;
  rating: number;
}
