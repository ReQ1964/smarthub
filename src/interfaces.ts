export interface IShowcaseProduct {
  id: string | number;
  name: string;
  colors: Array<string>;
  company: string;
  price: number;
  img: {
    [key: string]: string;
  };
}

export interface IDetailedProduct extends IShowcaseProduct {
  type: string;
  rating: number;
}
