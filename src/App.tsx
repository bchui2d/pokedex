import "./App.css";
import { Center, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import DisplayGrid from "./components/DisplayGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        <Center>
          <DisplayGrid></DisplayGrid>
        </Center>
      </GridItem>
    </Grid>
  );
}

export default App;
