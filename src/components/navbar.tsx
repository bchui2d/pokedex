import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/pngegg.png";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack p={"10px"}>
      <Image src={logo} boxSize="45px"></Image>
      <Text>PokeDex</Text>
      <SearchInput></SearchInput>
    </HStack>
  );
};

export default NavBar;
