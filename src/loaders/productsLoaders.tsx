import axios from 'axios';

interface SingleProductParams {
  params: {
    productId: string;
  };
}

export const AllProductsLoader = async () => {
  const res = await axios.get(
    'https://phone-shop-43033-default-rtdb.europe-west1.firebasedatabase.app/products.json',
  );
  if (res.data) {
    const transformedData = Object.values(res.data);
    return transformedData;
  } else return null;
};

export const SingleProductLoader = async ({ params }: SingleProductParams) => {
  const res = await axios.get(
    `https://phone-shop-43033-default-rtdb.europe-west1.firebasedatabase.app/products/${params.productId}.json`,
  );
  return res.data ? res.data : null;
};
