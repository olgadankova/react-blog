import { useInput } from "../../hooks/useInput";
import { StyledSearch } from "./styles";

export const SearchInput = () => {
  const searchValue = useInput();
  return (
    <StyledSearch
      type="text"
      placeholder="Search..."
      name="search"
      {...searchValue}
    />
  );
};
