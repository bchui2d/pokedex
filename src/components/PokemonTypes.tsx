import { Box, Center, Stack, Text } from "@chakra-ui/react";
import { Type } from "./hooks/usePokemon";

interface Props {
  types: Type[];
}

const PokemonTypes = ({ types }: Props) => {
  return (
    <>
      <Stack direction={"row"} justify={"center"} pt={2}>
        {types.map((type, index) => (
          <Box
            key={index}
            boxShadow={"base"}
            bg={"typeColor.".concat(type.name)}
            borderRadius={"lg"}
            w={"40%"}
          >
            <Center>
              <Text color={"whiteAlpha.800"} >{type.name}</Text>
            </Center>
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default PokemonTypes;
