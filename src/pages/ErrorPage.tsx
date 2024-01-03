import { Center, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import faceplant from "../assets/pikachu___face_plant_by_vampireselene13_d4p9oo1.png";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Center>
        <VStack maxW={"1600px"} w={"100%"}>
          <NavBar></NavBar>
          <Image
            boxSize={"md"}
            objectFit={"scale-down"}
            src={faceplant}
          ></Image>
          <Heading color={"blackAlpha.700"}>Oops!</Heading>
          <Text color={"blackAlpha.700"}>
            {isRouteErrorResponse(error)
              ? "This page does not exist."
              : "An unexpected error occured."}
          </Text>
        </VStack>
      </Center>
    </>
  );
};

export default ErrorPage;
