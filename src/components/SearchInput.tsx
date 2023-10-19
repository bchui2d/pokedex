import {
  Container,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import useSearchStore from "./store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useSearchStore((s) => s.setSearchText);

  return (
    <form
      onChange={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value); //pass search text from ref into function
      }}
    >
      <HStack p={5}>
        <Container
          p={2}
          bg={"#f0f1ff"}
          boxShadow={"dark-lg"}
          borderRadius={"10px"}
          maxW={"1fr"}
        >
          <InputGroup>
            <InputLeftElement
              children={<SearchIcon color={"blackAlpha.700"}></SearchIcon>}
            ></InputLeftElement>
            <Input
              color={"blackAlpha.700"}
              focusBorderColor="none"
              ref={ref}
              placeholder="Search Pokemon..."
              _placeholder={{
                color: "inherit",
                caret: "blackAlpha.700",
              }}
              variant={"flushed"}
            ></Input>
          </InputGroup>
        </Container>
      </HStack>
    </form>
  );
};

export default SearchInput;
