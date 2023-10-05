import { SimpleGrid, Text } from "@chakra-ui/react";
import usePokemonList from "./hooks/usePokemonList";
import PokemonCard from "./PokemonCard";

const DisplayGrid = () => {
  const { data, isLoading, error } = usePokemonList();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error retrieving pokemon...</p>;

  return (
    <SimpleGrid p={5} columns={{sm:1, md: 2, lg:3, xl:4}} spacing={5}>
      {data.results.map((poke, index) => (
        <PokemonCard key={index} pokemon={poke.name}></PokemonCard>
      ))}
    </SimpleGrid>
  );
};

export default DisplayGrid;
