import { Box, Image, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const DisplayGrid = () => {
  const fetchPokemon = () =>
    axios
      .get("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((res) => res.data);

  const { data } = useQuery({
    queryKey: ["pokemon"],
    queryFn: fetchPokemon,
  });

  var pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`

  return (
    <Image src={pokeImage} />
  );
};

export default DisplayGrid;
