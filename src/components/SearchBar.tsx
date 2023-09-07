import { HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const searchbar = () => (
  <HStack>
    <InputGroup>
      <InputLeftElement>
        <SearchIcon color="gray.300"></SearchIcon>
      </InputLeftElement>
      <Input borderRadius={20} placeholder="Search..."></Input>
    </InputGroup>
  </HStack>
);

export default searchbar;
