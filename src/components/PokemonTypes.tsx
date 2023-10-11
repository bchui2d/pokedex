import { Box, Center, HStack, Text } from "@chakra-ui/react";
import { Type } from "./hooks/usePokemon";

interface Props {
  types: Type[];
}

const PokemonTypes = ({ types }: Props) => {
  return (
    <>
      <HStack spacing={"24px"}>
        {types.map((type, index) => (
          <Box boxShadow={"base"} bg={"tomato"} borderRadius={"lg"} w={"40%"}>
            <Center>
              <Text key={index}>{type.name}</Text>
            </Center>
          </Box>
        ))}
      </HStack>
    </>
  );
};

export default PokemonTypes;
