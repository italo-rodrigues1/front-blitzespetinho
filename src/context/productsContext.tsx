import { createContext } from "react";
import useProducts, {
  PropsCreate,
  PropsDelete,
  PropsItemCart,
  StateTypeQuantity,
} from "../hooks/useProducts";

export type ProductsContextData = {
  products: [];
  setProducts: (products: []) => void;
  filteredProducts: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getProducts: () => void;
  getCategory: () => void;
  removeProduct: ({ id, closeModal }: PropsDelete) => void;
  removeCategory: (id: number | string) => void;
  category: [];
  setCategory: (products: []) => void;
  createCategoryOrProduct: (productsOrCategory: PropsCreate) => void;
  oldProducts: [];
  setOldProducts: (products: []) => void;
  addProducts: any;
  setAddProducts: (addProducts: any) => void;
  createItemCart: (productCart: PropsItemCart) => void;
  sendProduct: () => void;
  loading: boolean;
  quantityProductForPlusOrMinus: (addProducts: any) => void;
  quantityProduct: StateTypeQuantity[];
  setQuantityProduct: (quantityProduct: []) => void;
  selectedCard: null;
  setSelectedCard: (selectCard: number | null) => void;
};

export const ProductsContext = createContext<ProductsContextData | undefined>(
  undefined
);

export const ProductsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    products,
    setProducts,
    filteredProducts,
    getProducts,
    getCategory,
    removeProduct,
    removeCategory,
    category,
    setCategory,
    createCategoryOrProduct,
    oldProducts,
    setOldProducts,
    addProducts,
    setAddProducts,
    createItemCart,
    sendProduct,
    loading,
    quantityProductForPlusOrMinus,
    quantityProduct,
    setQuantityProduct,
    selectedCard,
    setSelectedCard,
  } = useProducts() as ProductsContextData;

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        getProducts,
        getCategory,
        removeProduct,
        removeCategory,
        category,
        setCategory,
        createCategoryOrProduct,
        oldProducts,
        setOldProducts,
        addProducts,
        setAddProducts,
        createItemCart,
        sendProduct,
        loading,
        quantityProductForPlusOrMinus,
        quantityProduct,
        setQuantityProduct,
        selectedCard,
        setSelectedCard,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
