import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import usePokemonList, { PkmnResults } from "./hooks/usePokemonList";
import PokemonCard from "./PokemonCard";
import PokemonCardSkeleton from "./PokemonCardSkeleton";
import useBoundedStore from "./store";
import faceplant from "../assets/pikachu___face_plant_by_vampireselene13_d4p9oo1.png";

const DisplayGrid = () => {
  const { pokemonQuery } = useBoundedStore();
  const { data, isLoading, error } = usePokemonList();
  let skeletons: Array<number> = new Array(20).fill(null).map((_, i) => i);

  // const typeFilter = (type: string) => type === typeQuery;
  // const filteredData = data?.results.filter(typeFilter);

  if (error) return <p>Error retrieving pokemon...</p>;

  function filteredPokemon(data: PkmnResults | undefined) {
    const pokemonResults = data?.results
      .filter((p) => {
        return pokemonQuery.toLowerCase() === ""
          ? p
          : p.name.includes(pokemonQuery.toLowerCase());
      })
      .slice(0, 20);
    return pokemonResults;
  }

  return (
    // <SimpleGrid
    //   maxW={"2000px"}
    //   p={5}
    //   columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
    //   spacing={5}
    // >
    //   {isLoading &&
    //     skeletons.map((skeleton) => (
    //       <PokemonCardSkeleton key={skeleton}></PokemonCardSkeleton>
    //     ))}

    //   {data?.results
    //     .filter((p) => {
    //       return pokemonQuery.toLowerCase() === ""
    //         ? p
    //         : p.name.includes(pokemonQuery.toLowerCase());
    //     })
    //     .slice(0, 20)
    //     .map((poke, index) => (
    //       <PokemonCard
    //         key={index}
    //         pokemonId={parseInt(poke.url.slice(42, -1))}
    //       ></PokemonCard>
    //     ))}
    // </SimpleGrid>

    <SimpleGrid
      maxW={"2000px"}
      p={5}
      columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
      spacing={5}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <PokemonCardSkeleton key={skeleton}></PokemonCardSkeleton>
        ))}

      {filteredPokemon(data)?.length === 0 ||
      filteredPokemon(data) === undefined ? (
        <VStack maxW={"1600px"} w={"100%"}>
          <Image src={faceplant}></Image>
          <Box></Box>
          <Heading color={"blackAlpha.700"}>Oh no!</Heading>
          <Text color={"blackAlpha.700"} textAlign={"center"}>
            We can't find what you are looking for...
          </Text>
        </VStack>
      ) : (
        filteredPokemon(data)?.map((poke, index) => (
          <PokemonCard
            key={index}
            pokemonId={parseInt(poke.url.slice(42, -1))}
          ></PokemonCard>
        ))
      )}
    </SimpleGrid>
  );
};

export default DisplayGrid;
