import { create } from 'zustand';

interface ICartProduct {
  id: string | number;
  name: string;
  color: string;
  company: string;
  price: number;
  img: string;
  type: string;
  quantity: number;
}

interface CartState {
  cartProducts: ICartProduct[];
  totalPrice: number;
  totalQuantity: number;
  addToCart: (product: ICartProduct) => void;
  removeFromCart: (id: string | number) => void;
  increaseQuantity: (id: string | number) => void;
  decreaseQuantity: (id: string | number) => void;
  clearCart: () => void;
  findProduct: (id: string | number) => ICartProduct | undefined;
}

const calculateTotalPrice = (products: ICartProduct[]) => {
  return products.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );
};

const calculateProductsQuantity = (products: ICartProduct[]) => {
  return products.reduce((total, product) => total + product.quantity, 0);
};

const useCartStore = create<CartState>((set, get) => ({
  cartProducts: [],
  totalPrice: 0,
  totalQuantity: 0,
  addToCart: (newProduct) =>
    set((state) => {
      const existingProduct = state.cartProducts.find(
        (product) => product.id === newProduct.id,
      );
      let updatedProducts: ICartProduct[] = [];

      if (existingProduct) {
        updatedProducts = state.cartProducts.map((product) =>
          product.id === newProduct.id
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        );
      } else {
        updatedProducts = [
          ...state.cartProducts,
          { ...newProduct, quantity: 1 },
        ];
      }
      return {
        cartProducts: updatedProducts,
        totalPrice: calculateTotalPrice(updatedProducts),
        totalQuantity: calculateProductsQuantity(updatedProducts),
      };
    }),
  removeFromCart: (id) =>
    set((state) => {
      const updatedProducts = state.cartProducts.filter(
        (product) => product.id !== id,
      );

      return {
        cartProducts: updatedProducts,
        totalPrice: calculateTotalPrice(updatedProducts),
        totalQuantity: calculateProductsQuantity(updatedProducts),
      };
    }),
  increaseQuantity: (id) =>
    set((state) => {
      const updatedProducts = state.cartProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      );

      return {
        cartProducts: updatedProducts,
        totalPrice: calculateTotalPrice(updatedProducts),
        totalQuantity: calculateProductsQuantity(updatedProducts),
      };
    }),
  decreaseQuantity: (id) =>
    set((state) => {
      const updatedProducts = state.cartProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity - 1) }
          : product,
      );

      return {
        cartProducts: updatedProducts,
        totalPrice: calculateTotalPrice(updatedProducts),
        totalQuantity: calculateProductsQuantity(updatedProducts),
      };
    }),
  clearCart: () =>
    set({
      cartProducts: [],
      totalPrice: 0,
      totalQuantity: 0,
    }),
  findProduct: (id) => {
    const state = get();
    return state.cartProducts.find((product) => product.id === id);
  },
}));

export default useCartStore;
