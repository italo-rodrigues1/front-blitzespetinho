import { useState, useEffect } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

export type PropsCreate = {
  options: string;
  item: {
    name: string;
    price: string | number;
    description?: string;
    image: string;
    category: string;
  };
  closeModal: (close: boolean) => void;
};

export type PropsDelete = {
  id: string | number | undefined;
  closeModal: (close: boolean) => void;
};

export type PropsItemCart = {
  _id: string | number | undefined;
  name: string;
  image: string;
  price: string | number;
};

const useProducts = () => {
  const [products, setProducts] = useState<[]>([]);
  const [oldProducts, setOldProducts] = useState<[]>([]);
  const [category, setCategory] = useState<[]>([]);
  const [addProducts, setAddProducts] = useState<PropsItemCart[]>([]);

  const filteredProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const newSearchProducts = products.filter((product) => {
      product === value;
    });

    setProducts(newSearchProducts as []);
  };

  const getProducts = async () => {
    try {
      const res = await api.get("/api/product");

      setProducts(res.data);
      setOldProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCategory = async () => {
    try {
      const res = await api.get("/api/category");

      setCategory(res.data);
    } catch (err: any) {
      console.log("err", err.reponse);
    }
  };

  const removeProduct = async ({ id, closeModal }: PropsDelete) => {
    try {
      const res = await api.delete(`/api/product/delete/${id}`);

      closeModal(false);
      toast.success(res.data.message);
      window.location.href = "/";
    } catch (err: any) {
      console.log("err", err.reponse);
      toast.error(err.response.data.message);
    }
  };

  const removeCategory = async (id: number | string) => {
    try {
      const res = await api.delete(`/api/category/delete/${id}`);

      setCategory(res.data);
      toast.success(res.data.message);
    } catch (err: any) {
      console.log("err", err.reponse);
      toast.error(err.response.data.message);
    }
  };

  const createCategoryOrProduct = async ({
    options,
    item,
    closeModal,
  }: PropsCreate) => {
    try {
      if (options === "category") {
        await api.post("/api/category/create", {
          name: item.name,
          image: item.image,
        });
        window.location.href = "/";
      } else {
        await api.post("/api/product/create", {
          name: item.name,
          description: item.description,
          image: item.image,
          price: item.price,
          category: item.category,
        });
        window.location.href = "/";
      }
      closeModal(false);
    } catch (err: any) {
      console.log("err", err.response);
      toast.error(err.response.data.message);
    }
  };

  const createItemCart = (item: PropsItemCart) => {
    // const getTotal = localStorage.getItem("");

    if (addProducts.length > 0) {
      const filterEqual = addProducts.filter(
        (product: any) => product._id == item._id
      );
      if (filterEqual.length > 0) {
        return;
      }
    }

    localStorage.setItem("item", JSON.stringify([...addProducts, item]));
    setAddProducts([...addProducts, item]);
  };

  useEffect(() => {
    if (localStorage.getItem("item") && addProducts.length <= 0) {
      setAddProducts(JSON.parse(localStorage.getItem("item") as string));
    }
  }, [addProducts]);

  return {
    products,
    setProducts,
    filteredProducts,
    getProducts,
    getCategory,
    category,
    setCategory,
    createCategoryOrProduct,
    removeProduct,
    removeCategory,
    oldProducts,
    setOldProducts,
    addProducts,
    setAddProducts,
    createItemCart,
  };
};

export default useProducts;
