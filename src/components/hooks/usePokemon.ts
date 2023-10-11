import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

export interface Type{
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name?: string;
  sprites: {
    other: any;
    front_default: string;
  };
  types: {type: Type}[]
}

const usePokemon = (name: string) => {
  const apiClient = new APIClient<Pokemon>(`/pokemon/${name}/`);

  return useQuery<Pokemon, Error>({
    queryKey: ["Pokemon", name],
    queryFn: apiClient.getList,
    staleTime: 10 * 1000,
  });
};

export default usePokemon;
