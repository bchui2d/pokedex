import "./App.css";
import { Center, Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import DisplayGrid from "./components/DisplayGrid";
import SearchInput from "./components/SearchInput";
import TypeSelector from "./components/TypeSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav aside" "main aside"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr 200px",
      }}
    >
      <GridItem area="nav">
        <Center>
          <VStack maxW={"1600px"} w={"100%"}>
            <NavBar></NavBar>
          </VStack>
        </Center>
      </GridItem>
      <GridItem area="main" bg={"#d3d4e0"}>
        <Center>
          <VStack maxW={"1600px"} w={"100%"}>
            <SearchInput></SearchInput>
            <HStack pl={5} maxW={"1600px"} w={"100%"} justifyContent={"left"}>
              <TypeSelector></TypeSelector>
            </HStack>
            <DisplayGrid></DisplayGrid>
          </VStack>
        </Center>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="#d3d4e0">
          Aside
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
