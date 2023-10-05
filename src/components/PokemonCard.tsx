import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import usePokemon from "./hooks/usePokemon";

interface Props {
  pokemon: string;
}

const PokemonCard = ({ pokemon }: Props) => {
  const { data, isLoading, error } = usePokemon(pokemon);

  function capitalizeFirstLetter(str?: string){
    if(str){
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return '';
  }

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error retrieving pokemon...</p>;

  return (
    <Card maxW={"sm"} align="center" borderRadius={10} overflow={"hidden"}>
      <CardBody>
        <Image src={data.sprites.other.dream_world.front_default}></Image>
        <Heading textAlign={"center"} fontSize={"2xl"}>
          {capitalizeFirstLetter(data.name)}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default PokemonCard;
