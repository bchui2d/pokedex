import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import types from "../data/types";
import useBoundedStore from "./store";

const TypeSelector = () => {
  const setType = useBoundedStore((state) => state.setType);
  return (
    <Menu>
      <MenuButton
        bg={"#f0f1ff"}
        borderRadius={10}
        boxShadow={"dark-lg"}
        color={"blackAlpha.700"}
        as={Button}
        rightIcon={<ChevronDownIcon></ChevronDownIcon>}
      >
        Types
      </MenuButton>
      <MenuList bg={"#f0f1ff"} color={"blackAlpha.700"} minW={"130px"}>
        {types.data.map((p) => (
          <MenuItem
            onClick={() => setType(p.name)}
            _hover={{ bg: "gray.400" }}
            bg={"#f0f1ff"}
            key={p.name}
          >
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TypeSelector;
