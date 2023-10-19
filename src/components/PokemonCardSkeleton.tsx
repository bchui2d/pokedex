import {
  Box,
  Card,
  CardBody,
  SkeletonText,
  Spinner,
} from "@chakra-ui/react";

const PokemonCardSkeleton = () => {
  return (
    <Card
      bg={"#f0f1ff"}
      maxW={"md"}
      borderRadius={10}
      overflow={"hidden"}
      boxShadow={"dark-lg"}
    >
      <CardBody>
        <Box boxSize={"270px"}>
          <Spinner boxSize={"200px"} color="blackAlpha.700"></Spinner>
        </Box>
        {/* <Skeleton color={"blackAlpha.700"} boxSize={"270px"}></Skeleton> */}

        <SkeletonText color={"blackAlpha.700"}></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default PokemonCardSkeleton;
