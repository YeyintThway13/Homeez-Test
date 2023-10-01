import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./Button";
import ParallexContainer from "./ParallaxContainer";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <Flex flexDir="column">
      <ParallexContainer bgImage="https://foyr.com/learn/wp-content/uploads/2022/02/how-to-use-textures-in-interior-design.jpg">
        <Text
          fontSize={{ lg: 20, md: 18, sm: 16 }}
          fontWeight={500}
          lineHeight="36px"
          // maxW="90%"
          display={{ sm: "block", base: "none" }}
        >
          Empowering homeowners to bring their dream home to life.
        </Text>
        <Heading
          as="h1"
          fontSize={{ lg: 40, md: 32, sm: 28, base: 24 }}
          fontWeight="black"
          lineHeight={{ lg: "68px", base: "34px" }}
          my={{ xl: "10px", lg: "10px", base: "8" }}
        >
          HOMEEZ
        </Heading>
        <Text
          display={{ sm: "block", base: "none" }}
          maxW="744px"
          fontSize={{ lg: 20, md: 18, sm: 16 }}
          lineHeight="33px"
          textTransform="none"
          mb={{ lg: "45px", base: "12" }}
        >
          “With Online Escrow, Homeez holds your funds until the works are done
          and workmanship is approved by you! This protects your funds while
          ensuring that contractors uphold the quality that you deserver”{" "}
        </Text>
        <MyButton onClick={() => navigate("/planner")} href="" color="white">
          Design Now
        </MyButton>
      </ParallexContainer>
    </Flex>
  );
};

export default Hero;
