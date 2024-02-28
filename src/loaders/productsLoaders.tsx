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
  const [productResponse, reviewsResponse, specificationsResponse] =
    await Promise.all([
      axios.get(
        `https://phone-shop-43033-default-rtdb.europe-west1.firebasedatabase.app/products/${params.productId}.json`,
      ),
      axios.get(
        `https://phone-shop-43033-default-rtdb.europe-west1.firebasedatabase.app/reviews/${params.productId}.json`,
      ),
      axios.get(
        `https://phone-shop-43033-default-rtdb.europe-west1.firebasedatabase.app/specifications/${params.productId}.json`,
      ),
    ]);
  if (productResponse && reviewsResponse && specificationsResponse) {
    return {
      product: productResponse.data,
      reviews: reviewsResponse.data,
      specifications: specificationsResponse.data,
    };
  } else {
    return null;
  }
};
