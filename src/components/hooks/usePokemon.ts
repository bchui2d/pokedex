import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export interface Pokemon {
  name: string;
  id: number;
}

export interface Results{
  results: Pokemon[];
}

const usePokemon = () => {
  const fetchPokemon = () =>
    axios
      .get<Results>('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then((res) => res.data);

  return useQuery<Results, Error>({
    queryKey: ['Pokemon'],
    queryFn: fetchPokemon,
  });
};

export default usePokemon;
