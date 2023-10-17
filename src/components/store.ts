import { create } from "zustand";

// interface PokemonQuery {
//   searchText?: string;
// }

interface SearchStore {
  pokemonQuery: string;
  setSearchText: (searchText: string) => void;
}

const useSearchStore = create<SearchStore>((set) => ({
  pokemonQuery: '',
  setSearchText: (searchText) =>
    set(() => ({ pokemonQuery: searchText })),
}));

export default useSearchStore;