import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import usePokemon from "./hooks/usePokemon";

interface Props {
  pokemon: string;
}

const PokemonCard = ({ pokemon }: Props) => {
  const { data, isLoading, error } = usePokemon(pokemon);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error retrieving pokemon...</p>;

  return (
    <Card>
      <Image src={data.sprites.front_default}></Image>
      <CardBody>
        <Heading>{data.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default PokemonCard;
