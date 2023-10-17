import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import useSearchStore from "./store";

//Need to create reducer for search text state, react context/zustand

// interface Props {
//   onSearch: (searchText: string) => void; //search function that takes search text
// }

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useSearchStore(s => s.setSearchText);

  return (
    <form
      onChange={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value); //pass search text from ref into function
      }}
    >
      <InputGroup>
        <InputLeftElement
          children={<SearchIcon></SearchIcon>}
        ></InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Pokemon..."
          variant={"filled"}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
