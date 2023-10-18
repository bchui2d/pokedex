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
    other: {
      ["official-artwork"]:{
        front_default: string;
      }
    };
    front_default: string;
  };
  types: {type: Type}[]
}

const usePokemon = (id: number) => {
  const apiClient = new APIClient<Pokemon>(`/pokemon/${id}`);

  return useQuery<Pokemon, Error>({
    queryKey: ["Pokemon", id],
    queryFn: apiClient.getList,
    staleTime: 10 * 1000,
  });
};

export default usePokemon;
