import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  SkeletonText,
} from "@chakra-ui/react";
import usePokemon from "./hooks/usePokemon";
import PokemonTypes from "./PokemonTypes";
import pokeball from "../assets/clipart1298491.png";
import { motion } from "framer-motion";
import PokemonCardSkeleton from "./PokemonCardSkeleton";

interface Props {
  pokemonId: number;
}

const PokemonCard = ({ pokemonId }: Props) => {
  const { data, isLoading, error } = usePokemon(pokemonId);

  function capitalizeFirstLetter(str?: string) {
    if (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return "";
  }

  if (isLoading) return <PokemonCardSkeleton></PokemonCardSkeleton>;

  if (error) return <p>Error retrieving pokemon...</p>;

  return (
    <Card
      as={motion.div}
      bg={"#f0f1ff"}
      maxW={"md"}
      justifyContent="center"
      borderRadius={10}
      overflow={"hidden"}
      boxShadow={"dark-lg"}
      whileHover={{ scale: 1.05 }}
    >
      <CardBody>
        <HStack justifyContent={"left"} p={1}>
          <Image boxSize={"25px"} src={pokeball}></Image>
          <Heading color={"blackAlpha.700"} fontSize={"2xl"}>
            {"#" + `0000${data.id}`.slice(-4)}
          </Heading>
        </HStack>
        <Image
          boxSize={"270px"}
          src={data.sprites.other["official-artwork"].front_default}
        ></Image>
        <Heading color={"blackAlpha.700"} textAlign={"center"} fontSize={"2xl"}>
          {capitalizeFirstLetter(data.name)}
        </Heading>
        <PokemonTypes types={data.types.map((t) => t.type)}></PokemonTypes>
      </CardBody>
    </Card>
  );
};

export default PokemonCard;
