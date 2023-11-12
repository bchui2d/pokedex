import { Center, VStack } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Center>
      <VStack maxW={"1600px"} w={"100%"}>
        <NavBar></NavBar>
        <Outlet />
      </VStack>
    </Center>
  );
};

export default Layout;
