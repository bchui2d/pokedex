import { Box, Center, HStack, Stack, Text } from "@chakra-ui/react";
import { Type } from "./hooks/usePokemon";

interface Props {
  types: Type[];
}

const PokemonTypes = ({ types }: Props) => {
  return (
    <>
      <Stack direction={'row'} justify={'center'} pt={2}>
        {types.map((type, index) => (
          <Box boxShadow={"base"} bg={"tomato"} borderRadius={"lg"} w={"40%"}>
            <Center>
              <Text key={index}>{type.name}</Text>
            </Center>
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default PokemonTypes;
