import { Grid, GridItem, Center, VStack, HStack, Show } from '@chakra-ui/react';
import React from 'react'
import DisplayGrid from '../components/DisplayGrid';
import SearchInput from '../components/SearchInput';
import TypeSelector from '../components/TypeSelector';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: ` "main"`,
        lg: ` "main aside"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr 200px",
      }}
    >
      {/* <GridItem area="nav">
        <Center>
          <VStack maxW={"1600px"} w={"100%"}>
            <NavBar></NavBar>
          </VStack>
        </Center>
      </GridItem> */}
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

export default HomePage