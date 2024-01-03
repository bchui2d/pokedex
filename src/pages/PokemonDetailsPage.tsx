import { useParams } from "react-router-dom";
import usePokemon from "../components/hooks/usePokemon";
import { Box, Container, Heading, Image, Text, VStack } from "@chakra-ui/react";

const PokemonDetailsPage = () => {
  const { id } = useParams();
  const { data } = usePokemon(Number(id));

  return (
    <Container>
      <VStack>
        <Heading>{data?.name}</Heading>
        <Image
          src={data?.sprites.other["official-artwork"].front_default}
        ></Image>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          repudiandae quam quis, aliquid error tempore porro fuga, delectus
          similique eum excepturi, consequatur sed ducimus deleniti sunt
          laboriosam enim! Repellendus, harum.
        </Text>
      </VStack>
    </Container>
  );
};

export default PokemonDetailsPage;
