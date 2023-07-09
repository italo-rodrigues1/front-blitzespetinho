import { createContext } from "react";
import useProducts, {
  PropsCreate,
  PropsDelete,
  PropsItemCart,
} from "../hooks/useProducts";

export type ProductsContextData = {
  products: [];
  setProducts: (products: []) => void;
  filteredProducts: any;
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
  setAddProducts: (products: any) => void;
  createItemCart: (products: PropsItemCart) => void;
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
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
