import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import types from "../data/types";

const TypeSelector = () => {
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
      <MenuList
        bg={"#f0f1ff"}
        color={"blackAlpha.700"}
        minW={"130px"}
      >
        {types.data.map((p) => (
          <MenuItem _hover={{ bg: "gray.400" }} bg={"#f0f1ff"} key={p.name}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TypeSelector;
