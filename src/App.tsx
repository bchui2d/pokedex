import "./App.css";
import { Center, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import DisplayGrid from "./components/DisplayGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main aside"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr 200px",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="#d3d4e0">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg={"#d3d4e0"}>
        <Center>
          <DisplayGrid></DisplayGrid>
        </Center>
      </GridItem>
    </Grid>
  );
}

export default App;
