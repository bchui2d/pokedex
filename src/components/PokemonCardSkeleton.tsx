import {
  Box,
  Card,
  CardBody,
  Skeleton,
  SkeletonText,
  Spinner,
} from "@chakra-ui/react";

const PokemonCardSkeleton = () => {
  return (
    <Card
      bg={"#f0f1ff"}
      maxW={"md"}
      justifyItems="center"
      borderRadius={10}
      overflow={"hidden"}
      boxShadow={"dark-lg"}
    >
      <CardBody>
        <Box boxSize={"270px"}>
          <Spinner size={"xl"} color="blackAlpha.700"></Spinner>
        </Box>
        {/* <Skeleton color={"blackAlpha.700"} boxSize={"270px"}></Skeleton> */}
        <SkeletonText color={"blackAlpha.700"}></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default PokemonCardSkeleton;
