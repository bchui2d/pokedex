import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/pngegg.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="45px"></Image>
      <Text>PokeDex</Text>
    </HStack>
  );
};

export default NavBar;
