import { StateCreator, create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface SearchSlice {
  pokemonQuery: string;
  setSearchText: (searchText: string) => void;
}

interface TypeSlice {
  typeQuery: string;
  setType: (selectedType: string) => void;
}

const createSearchSlice: StateCreator<SearchSlice> = (set) => ({
  pokemonQuery: "",
  setSearchText: (searchText) => set(() => ({pokemonQuery: searchText}))
})

const createTypeSlice: StateCreator<TypeSlice> = (set) => ({
  typeQuery: "Fire",
  setType: (selectedType) => set(() => ({typeQuery: selectedType}))
})

const useBoundedStore = create<SearchSlice & TypeSlice>()((...a) => ({
  ...createSearchSlice(...a),
  ...createTypeSlice(...a)
}))
if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useBoundedStore);
}

export default useBoundedStore;
