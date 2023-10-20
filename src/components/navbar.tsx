import { HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../assets/pngegg.png";

const NavBar = () => {
  return (
    <HStack w={"100%"} maxW={"1600px"} pl={5} pt={2} pb={2}>
      <Image src={logo} boxSize="45px"></Image>
      <Heading>PokeDex</Heading>
    </HStack>
  );
};

export default NavBar;
