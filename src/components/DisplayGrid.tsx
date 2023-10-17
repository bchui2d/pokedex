import { SimpleGrid } from "@chakra-ui/react";
import usePokemonList from "./hooks/usePokemonList";
import PokemonCard from "./PokemonCard";
import PokemonCardSkeleton from "./PokemonCardSkeleton";
import useSearchStore from "./store";

const DisplayGrid = () => {
  const {pokemonQuery} = useSearchStore();
  const { data, isLoading, error } = usePokemonList();
  let skeletons: Array<number> = new Array(60).fill(null).map((_, i) => i);

  // if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error retrieving pokemon...</p>;

  return (
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

      {data?.results.filter((p) => {
        return pokemonQuery === '' ? p : p.name.includes(pokemonQuery)
      }).map((poke, index) => (
        <PokemonCard key={index} pokemon={poke.name}></PokemonCard>
      ))}

    </SimpleGrid>
  );
};

export default DisplayGrid;
