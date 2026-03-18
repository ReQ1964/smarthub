import axios from 'axios';
import { LoaderFunctionArgs } from 'react-router';
import { IDetailedProduct } from '@/interfaces';
import { IReviews } from '@/pages/SingleProduct/Description/Reviews/Reviews';
import { ISpecifications } from '@/pages/SingleProduct/Description/Specifications/Specifications';

interface SingleProductParams {
  params: {
    productId: string;
  };
}

export const AllProductsLoader = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/products.json`);
  if (res.data) {
    const transformedData = Object.values(res.data);
    return transformedData;
  } else return null;
};

export const SingleProductLoader: (
  args: LoaderFunctionArgs<SingleProductParams>,
) => Promise<{
  product: IDetailedProduct[];
  reviews: IReviews[];
  specifications: ISpecifications;
} | null> = async ({ params }) => {
  const [productResponse, reviewsResponse, specificationsResponse] =
    await Promise.all([
      axios.get(
        `${import.meta.env.VITE_API_URL}/products/${params.productId}.json`,
      ),
      axios.get(
        `${import.meta.env.VITE_API_URL}/reviews/${params.productId}.json`,
      ),
      axios.get(
        `${import.meta.env.VITE_API_URL}/specifications/${params.productId}.json`,
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
