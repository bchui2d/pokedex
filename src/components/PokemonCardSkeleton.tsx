import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const PokemonCardSkeleton = () => {
  return (
    <Card maxW={"md"} align="center" borderRadius={10} overflow={"hidden"}>
      <CardBody>
        <Skeleton boxSize={"270px"}></Skeleton>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default PokemonCardSkeleton;
