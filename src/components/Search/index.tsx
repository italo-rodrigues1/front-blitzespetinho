import { HiMagnifyingGlass } from "react-icons/hi2";
import { Label } from "./styles";
import { useContext } from "react";
import {
  ProductsContext,
  ProductsContextData,
} from "../../context/productsContext";

export default function Search() {
  const { filteredProducts } = useContext(
    ProductsContext
  ) as ProductsContextData;

  return (
    <Label>
      <HiMagnifyingGlass />
      <input
        type="text"
        placeholder="O que deseja?"
        onChange={(e) => filteredProducts(e)}
      />
    </Label>
  );
}
