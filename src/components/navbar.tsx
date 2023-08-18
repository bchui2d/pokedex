import { HStack, Heading, Image } from "@chakra-ui/react";
import logo from '../assets/pngegg.png'

const navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize='35px'></Image>
      <Heading>Pokedex</Heading>
    </HStack>
  );
};

export default navbar;
