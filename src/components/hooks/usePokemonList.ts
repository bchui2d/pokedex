import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<PkmnResults>(`/pokemon-species/?limit=20000`);

export interface PokemonURL {
  name: string;
  url: string;
}

export interface PkmnResults {
  count: number;
  results: PokemonURL[];
}

const usePokemonList = () => {
  return useQuery<PkmnResults, Error>({
    queryKey: ["PokemonList"],
    queryFn: apiClient.getList,
    staleTime: 10 * 1000,
  });
};

export default usePokemonList;
