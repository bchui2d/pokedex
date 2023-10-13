import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<SearchIcon></SearchIcon>}></InputLeftElement>
      <Input
        borderRadius={20}
        placeholder="Search Pokemon..."
        variant={"filled"}
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
