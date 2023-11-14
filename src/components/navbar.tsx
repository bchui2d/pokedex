import { HStack, Heading, Image, LinkBox, LinkOverlay } from "@chakra-ui/react";
import logo from "../assets/pngegg.png";

const NavBar = () => {
  return (
    <HStack bg={"#9e9fa8"} w={"100%"} maxW={"1600px"} pl={5} pt={2} pb={2}>
      <LinkBox>
        <LinkOverlay href={"/"}>
          <Image src={logo} boxSize="45px"></Image>
        </LinkOverlay>
      </LinkBox>
      <LinkBox>
        <LinkOverlay href={"/"}>
          <Heading>PokeDex</Heading>
        </LinkOverlay>
      </LinkBox>
    </HStack>
  );
};

export default NavBar;
