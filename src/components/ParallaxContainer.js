import React from "react";
import { Flex, Box } from "@chakra-ui/react";

function ParallexContainer({ bgImage, children }) {
  return (
    <Box overflow="hidden">
      <Box
        bgImage={bgImage}
        pos="relative"
        w="100vw"
        // h="100vh"
        h={{ "2xl": "78vh", lg: "70vh", sm: "75vh", base: "80vh" }}
        maxH={{ lg: "100vh", base: "100vh" }}
        backgroundRepeat="no-repeat"
        backgroundAttachment={{ lg: "fixed" }}
        backgroundPosition="50% 0"
        backgroundSize="cover"
      >
        <Box
          w="100%"
          h="100%"
          pos="absolute"
          top={0}
          left={0}
          bg="black"
          opacity={0.65}
          zIndex={1}
        />
        <Flex
          w="100%"
          h="100%"
          pos="absolute"
          top={0}
          left={0}
          zIndex={2}
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          // textTransform="uppercase"
          letterSpacing="2px"
          color="white"
          textAlign="center"
          px={5}
          pb={{ xl: 20, lg: 10, md: 10 }}
        >
          {children}
        </Flex>
      </Box>
    </Box>
  );
}

export default ParallexContainer;
