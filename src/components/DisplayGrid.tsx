import { ListItem, UnorderedList } from "@chakra-ui/react";
import usePokemon from "./hooks/usePokemon";


const DisplayGrid = () => {
  const { data, error, isLoading } = usePokemon();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error retrieving pokemon...</p>;

  

  return (

    <UnorderedList>
      {data.results.map((poke) => (
        <ListItem>{poke.name}</ListItem>
      ))}
    </UnorderedList>

  );
};

export default DisplayGrid;
