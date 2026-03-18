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

interface ICartState {
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

const calculateTotalPrice = (products: ICartProduct[]) =>
  products.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

const calculateProductsQuantity = (products: ICartProduct[]) =>
  products.reduce((total, product) => total + product.quantity, 0);

const updateCartState = (products: ICartProduct[]) => ({
  cartProducts: products,
  totalPrice: calculateTotalPrice(products),
  totalQuantity: calculateProductsQuantity(products),
});

const useCartStore = create<ICartState>((set, get) => ({
  cartProducts: [],
  totalPrice: 0,
  totalQuantity: 0,
  addToCart: (newProduct) =>
    set((state) => {
      const existingProduct = state.cartProducts.find(
        (product) => product.id === newProduct.id,
      );

      const updatedProducts = existingProduct
        ? state.cartProducts.map((product) =>
            product.id === newProduct.id
              ? { ...product, quantity: product.quantity + 1 }
              : product,
          )
        : [...state.cartProducts, { ...newProduct, quantity: 1 }];

      return updateCartState(updatedProducts);
    }),
  removeFromCart: (id) =>
    set((state) => {
      const updatedProducts = state.cartProducts.filter(
        (product) => product.id !== id,
      );
      return updateCartState(updatedProducts);
    }),
  increaseQuantity: (id) =>
    set((state) => {
      const updatedProducts = state.cartProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      );
      return updateCartState(updatedProducts);
    }),
  decreaseQuantity: (id) =>
    set((state) => {
      const updatedProducts = state.cartProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity - 1) }
          : product,
      );
      return updateCartState(updatedProducts);
    }),
  clearCart: () => set(() => updateCartState([])),
  findProduct: (id) => {
    return get().cartProducts.find((product) => product.id === id);
  },
}));

export default useCartStore;
