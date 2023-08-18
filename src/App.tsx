import "./App.css";
import { Center, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header header"
               "main main"`,
      
        lg: `"header header"
             "nav main"`,
      }}
      gridTemplateColumns={'100px 1fr'}
      gridTemplateRows={'50px 1fr'}
      h = '100hv'
    >
      <GridItem pl="2" area={"header"}>
        <Center>
          <NavBar />
        </Center>
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          Nav
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <Center>
          <SearchBar></SearchBar>
        </Center>
      </GridItem>
    </Grid>
  );
}

export default App;
