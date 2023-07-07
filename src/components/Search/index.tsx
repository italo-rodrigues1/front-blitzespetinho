import useProducts from "../../hooks/useProducts";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Label } from "./styles";

export default function Search() {
  const { filteredProducts } = useProducts();

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
