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
  price: string;
};

export type StateTypeQuantity = {
  name: string;
  quantity: string | number;
};

const useProducts = () => {
  const [products, setProducts] = useState<[]>([]);
  const [quantityProduct, setQuantityProduct] = useState<StateTypeQuantity[]>(
    []
  );
  const [oldProducts, setOldProducts] = useState<[]>([]);
  const [category, setCategory] = useState<[]>([]);
  const [addProducts, setAddProducts] = useState<PropsItemCart[]>([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const [loading, setLoading] = useState(false);

  const filteredProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value) {
      const results = oldProducts.filter((product: any) => {
        return product.name.toLowerCase().startsWith(value.toLowerCase());
      });
      setProducts(results as []);
    } else {
      setProducts(oldProducts);
    }
    setSelectedCard(null);
  };

  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await api.get("/api/product");
      setLoading(false);
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
    if (addProducts.length > 0) {
      const filterEqual = addProducts.filter(
        (product) => product._id == item._id
      );
      if (filterEqual.length > 0) {
        return;
      }
    }

    const countPrice: any = parseFloat(item.price.replace(",", "."));
    let totalLocal: string | number | null = localStorage.getItem("total");

    if (totalLocal) {
      totalLocal = parseFloat(totalLocal.replace(",", "."));

      localStorage.setItem("total", totalLocal + countPrice);
    } else {
      localStorage.setItem("total", item.price.replace(",", "."));
    }

    localStorage.setItem("item", JSON.stringify([...addProducts, item]));
    localStorage.setItem(
      "quantityProduct",
      JSON.stringify([...quantityProduct, { name: item.name, quantity: 1 }])
    );

    setAddProducts([...addProducts, item]);
    setQuantityProduct([...quantityProduct, { name: item.name, quantity: 1 }]);
  };

  const sendProduct = () => {
    const totalPrice = localStorage.getItem("total") || 0;
    const array =
      localStorage.getItem("quantityProduct") &&
      JSON.parse(localStorage.getItem("quantityProduct") as string);

    const pedidosFormatados = array.map(
      (item: { name: string; quantity: string | number }) =>
        `${item.name} ${item.quantity}x`
    );

    console.log(pedidosFormatados);

    const resultado = `Meus pedidos: ${pedidosFormatados.join(
      ", "
    )}. Total: ${totalPrice}`;

    if (localStorage.getItem("item")) {
      window.open(
        `${import.meta.env.VITE_URL_WHATSAPP}/send?phone=${
          import.meta.env.VITE_PHONE
        }&text=${resultado}`
      );
      localStorage.removeItem("item");
      localStorage.removeItem("total");
      localStorage.removeItem("quantityProduct");
    } else {
      toast.warn("Nenhum produto selecionado...");
    }
  };

  const quantityProductForPlusOrMinus = ({
    name,
    plusOrMinus,
    price,
  }: {
    name: string;
    plusOrMinus: string;
    price: string;
  }) => {
    const getSumOrMinus =
      localStorage.getItem("quantityProduct") &&
      JSON.parse(localStorage.getItem("quantityProduct") as string);

    const getTotal: any =
      localStorage.getItem("total") && Number(localStorage.getItem("total"));

    getSumOrMinus.filter((item: any) => {
      if (item.name === name) {
        if (plusOrMinus === "-") {
          if (item.quantity > 1) {
            item.quantity -= 1;
            localStorage.setItem(
              "total",
              (getTotal - Number(price.replace(",", "."))) as any
            );
          }
        } else {
          item.quantity += 1;
          localStorage.setItem("total", +price.replace(",", ".") + getTotal);
        }
      }
    });
    localStorage.setItem("quantityProduct", JSON.stringify(getSumOrMinus));
    setQuantityProduct(getSumOrMinus);
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
    sendProduct,
    loading,
    quantityProductForPlusOrMinus,
    quantityProduct,
    setQuantityProduct,
    selectedCard,
    setSelectedCard,
  };
};

export default useProducts;
